"use client";

=======
import Blog from "../../../components/pages/Blog";

export default function page({ params, searchParams }) {
  return <Blog _id={params._id} />;
}
