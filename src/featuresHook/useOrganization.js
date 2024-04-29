import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { OrganizationService } from "../services/organization";

const Organization = new OrganizationService();
export function useGetAllMyOrganizationsTodos() {
  const {
    isLoading: isGettingAllOrganizations,
    data: allOrganizations,
    error,
  } = useQuery({
    queryKey: ["allMyOrganizations"],
    // queryFn: todo.getTodos,
    queryFn: async () => await Organization.getAllMyOrganizations(),
  });

  return { isGettingAllOrganizations, allOrganizations, error };
}

export function useCreateOrganization() {
  const queryClient = useQueryClient();
  const { isPending: isCreatingOrganization, mutate: createOrganization } =
    useMutation({
      mutationFn: async (data) => await Organization.createOrganization(data),
      onSuccess: (data) => {
        toast.success("Succesfully Created Organization");
        queryClient.invalidateQueries({ queryKey: ["allMyOrganizations"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { isCreatingOrganization, createOrganization };
}
export function useGetOrganizationMembers(orgId) {
  const { isPending: isGettingMembers, data: getMembers } = useQuery({
    queryKey: ["organizationMembers", orgId],
    queryFn: async () => await Organization.getOrganizationMembers(orgId),
  });
  return { isGettingMembers, getMembers };
}
export function useAddMember() {
  const queryClient = useQueryClient();
  const { isPending: isAddingMember, mutate: addMember } = useMutation({
    mutationFn: async (data) => await Organization.addMember(data),
    onSuccess: (data) => {
      toast.success("Succesfully added member");
      queryClient.invalidateQueries({ queryKey: ["organizationMembers"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isAddingMember, addMember };
}

export function useRemoveMember() {
  const queryClient = useQueryClient();
  const { isPending: isRemovingMember, mutate: removeMember } = useMutation({
    mutationFn: async (data) =>
      await Organization.deleteOrganizationMember(data),
    onSuccess: (data) => {
      toast.success("Succesfully removed member");
      queryClient.invalidateQueries({ queryKey: ["organizationMembers"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isRemovingMember, removeMember };
}
