import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/list", data);
    toast.success("Item added successfully...");
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

  return redirect("/");
};
