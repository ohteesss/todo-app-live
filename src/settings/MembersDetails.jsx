import { useRemoveMember } from "../featuresHook/useOrganization";
import ButtonIcon from "../ui/ButtonIcon";
import DeleteIcon from "../ui/icons/delete";

function MembersDetails({ name = "John Doe", role = "user" }) {
  const { isRemovingMember, removeMember } = useRemoveMember();
  const memId = "2f69100c-fe3c-4b6d-a388-8335b424899c";
  return (
    <li className="flex items-center justify-between">
      {" "}
      <div className="flex items-center gap-4">
        <p>{name}</p>{" "}
        <span className="text-sm px-2 rounded-full bg-slate-200">{role}</span>
      </div>
      <ButtonIcon onClick={() => removeMember({ orgId: memId, memberId })}>
        {" "}
        <DeleteIcon />{" "}
      </ButtonIcon>
    </li>
  );
}

export default MembersDetails;
