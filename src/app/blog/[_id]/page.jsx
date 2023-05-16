"use client";
import Blog from "../../../components/sections/Blog";
export default function page({ params, searchParams }) {
  return <Blog _id={params._id} />;
}
