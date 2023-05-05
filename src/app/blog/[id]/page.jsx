import axios from "axios";
import Blog from "@/components/pages/blog";
import { blogs } from "@/data";
const fetchBlog = async (id) => {
  const response = await axios.get(`http://localhost:4000/api/blog/${id}`);
  return response;
};
export default async function blog({ params, searchParams }) {
  const response = await fetchBlog(params.id);
  return <Blog blog={response?.data?.blog} />;
}
