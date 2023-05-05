import Blogs from "@/components/pages/Blogs";
import axios from "axios";
import { SERVER_BASE_URL } from "../../../constants";

// FETCH BLOGS
const fetchBlogs = async () => {
  const response = await axios.get(`${SERVER_BASE_URL}/blog/all`);
  return response;
};

export default async function page() {
  // FETCH BLOGS API CALL
  const response = await fetchBlogs();
  const blogs = response?.data?.blogs;

  // BLOGS PAGE COMPONENT
  return <Blogs blogs={blogs} />;
}
