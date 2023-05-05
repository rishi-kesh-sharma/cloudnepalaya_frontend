import axios from "axios";
import Blog from "@/components/pages/blog";
import { blogs } from "@/data";
import { SERVER_BASE_URL } from "../../../../constants";
const fetchBlog = async (id) => {
  const response = await axios.get(`${SERVER_BASE_URL}/blog/${id}`);
  return response;
};
export default async function blog({ params, searchParams }) {
  const response = await fetchBlog(params.id);
  return <Blog blog={response?.data?.blog} />;
}
