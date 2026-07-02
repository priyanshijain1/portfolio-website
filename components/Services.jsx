import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="relative mt-14">
      {/* Blobs removed */}
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
