import { useForm } from "react-hook-form";
import { useTodo } from "../TodoContext";
import Modal from "../ui/Modal";
import AddIcon from "../ui/icons/add";
import ButtonIcon from "../ui/ButtonIcon";
import Heading from "../ui/HeadingTag";
import LoginButton from "../ui/LoginButton";
import { useState } from "react";
import { useAddMember } from "../featuresHook/useOrganization";

function AddMember() {
  const { darkMode } = useTodo();
  const [selectValue, setSelectValue] = useState("user");
  const { isAddingMember, addMember } = useAddMember();

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    addMember({
      orgId: "2f69100c-fe3c-4b6d-a388-8335b424899c",
      email: data.email,
    });
  }
  return (
    <li className=" flex items-center py-4 px-6 justify-between">
      {" "}
      <p className={!darkMode ? "text-[#484b6a]" : "text-[#e4e5f1]"}>
        Add a member to this project
      </p>{" "}
      <Modal.Open opens={"addMember"}>
        <ButtonIcon>
          {" "}
          <AddIcon />
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name={"addMember"}>
        <div className="w-80">
          <Heading as="h4" className={" text-stone-800"}>
            Input Users Details
          </Heading>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <label className="font-semibold text-gray-600">Email</label>
            <input
              type="text"
              id="username"
              className="py-2 px-4 rounded-lg border-grey-100 focus:outline-none "
              {...register("email", {
                required: "Input member email",
              })}
            />
            {errors?.email?.message && (
              <p className="text-red-500">{errors?.email?.message}</p>
            )}
          </form>

          <select
            className="focus:outline-none w-full p-2 mt-6"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value={"user"}>SET AS USER</option>
            <option value={"admin"}>SET AS ADMIN</option>
          </select>
          <div className=" flex justify-end mt-4">
            <LoginButton disabled={isAddingMember}>Add User</LoginButton>
          </div>
        </div>
      </Modal.Window>
    </li>
  );
}

export default AddMember;
