import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/List";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/list");
    const { totalItems, items } = data;

    return { totalItems, items };
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

async function deleteItem(data) {
  try {
    await customFetch.delete(`/list/${data.id}`);
    toast.success("Item deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

async function toggleItem(data) {
  try {
    await customFetch.patch(`/list/${data.id}`, data);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  if (!data.done) {
    await deleteItem(data);
  } else {
    await toggleItem(data);
  }
  return null;
};

const List = () => {
  const data = useLoaderData();
  const { totalItems, items } = data;

  return (
    <Wrapper>
      <header>
        <h4>Shopping List</h4>
        <h5>
          {totalItems} Shopping List Item{items.length > 1 && "s"} found
        </h5>
      </header>
      <section className="items">
        <ul>
          {items.map((item) => {
            return (
              <li key={item._id} className={item.done ? "done" : ""}>
                <Form method="post" className="check">
                  <input type="hidden" name="done" value={!item.done} />
                  <input type="hidden" name="id" value={item._id} />
                  <button type="submit">done</button>
                </Form>
                <h3 className="item">{item.name}</h3>
                <Form method="delete" className="delete">
                  <input type="hidden" name="id" value={item._id} />
                  <button type="submit">delete</button>
                </Form>
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
};

export default List;
