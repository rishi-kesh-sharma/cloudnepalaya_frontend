"use client";
import Service from "@/components/pages/Service";
import { servicesData } from "@/data";

export default function service({ params, searchParams }) {
  return <Service _id={params._id} />;
}
