import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="relative mt-14">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#5fdde8]/10 blur-xl" />
      <div className="pointer-events-none absolute right-[-3rem] bottom-10 h-64 w-64 rounded-full bg-[#f472b6]/10 blur-xl" />
      <div className="pointer-events-none absolute left-[50%] -top-10 h-56 w-56 rounded-full bg-[#a78bfa]/10 blur-xl" />
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
