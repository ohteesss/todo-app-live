// import { Client } from "../services/api-client";
import { Client } from "../api-client";
import { AllUsersOrganizations } from "./organization.interface";

export class OrganizationService {
  private apiClient = new Client();

  getAllMyOrganizations() {
    return this.apiClient.get<AllUsersOrganizations[]>("organizations");
  }

  createOrganization(data: { name: string }) {
    return this.apiClient.post<{ name: string }, { detail: string }>(
      "auth/register",
      data
    );
  }

  getOrganizationMembers(orgId: string) {
    return this.apiClient.get(`organizations/${orgId}/members`);
  }
  deleteOrganizationMember(data: { orgId: string; memberId: string }) {
    return this.apiClient.delete(
      `organizations/${data.orgId}/members/${data.memberId}`
    );
  }
  addMember(data: { orgId: string; email: string }) {
    return this.apiClient.post<{ email: string }>(
      `organizations/${data.orgId}/members`,
      {
        email: data.email,
      }
    );
  }
}
