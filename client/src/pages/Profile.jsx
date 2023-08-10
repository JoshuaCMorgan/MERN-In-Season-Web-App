import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={name}></FormRow>
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          ></FormRow>
          <FormRow type="email" name="email" defaultValue={email}></FormRow>
          <FormRow
            type="text"
            name="location"
            defaultValue={location}
          ></FormRow>
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
