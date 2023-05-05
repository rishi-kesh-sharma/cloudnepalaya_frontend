"use client";
import Service from "@/components/pages/Service";
import { servicesData } from "@/data";
// import { Services } from "@/data";

export default function service({ params, searchParams }) {
  return <Service service={servicesData[params?.id - 1]} />;
}
