import React from "react";
import {
  CarIcon,
  ChartBarIcon,
  CogIcon,
  SearchIcon,
  SettingsIcon,
  TruckIcon,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ComponentTwo = () => {
  const services = [
    {
      icon: <CogIcon size={40} />,
      title: "Locomotive Maintenance",
      description:
        " Comprehensive maintenance solutions to ensure your locomotives operate at peak efficiency. From routine inspections to advanced diagnostics, we keep your engines running smoothly.",
    },
    {
      icon: <CarIcon size={40} />,
      title: "Railway Track Repair",
      description:
        "Expert repair and maintenance services for railway tracks, ensuring the safety and reliability of your rail infrastructure. Our team addresses wear and tear, preventing costly disruptions.",
    },
    {
      icon: <SettingsIcon size={40} />,
      title: "Component Overhaul",
      description:
        "Specialized overhaul services for critical railway components. We restore parts to optimal condition, extending the lifespan of your equipment and reducing downtime.",
    },
    {
      icon: <SearchIcon size={40} />,
      title: "Safety Inspections",
      description:
        "Thorough safety inspections to identify potential issues before they become problems. Our detailed assessments help you maintain compliance and ensure passenger and cargo safety.",
    },
    {
      icon: <TruckIcon size={40} />,
      title: "Locomotive Refurbishment",
      description:
        "Full-scale refurbishment services to modernize and upgrade your locomotives. We enhance performance, efficiency, and aesthetics, giving your fleet a new lease on life.\n",
    },
    {
      icon: <ChartBarIcon size={40} />,
      title: "Predictive Maintenance",
      description:
        "Utilizing advanced data analytics and AI, we offer predictive maintenance services that help you anticipate issues before they arise, minimizing downtime and optimizing your maintenance schedule.",
    },
  ];
  return (
    <div className={"mt-32"}>
      <div className={"grid grid-cols-2 gap-12"}>
        <div>
          <h2 className={"text-3xl font-bold"}>
            Enhance Safety and Reliability with Our Expert Railway Maintenance
            Services
          </h2>
        </div>
        <div>
          <p>
            At Mansour Fateh, we prioritize safety, efficiency, and innovation
            in our locomotive and railway maintenance services. Our experienced
            team ensures that every rail journey is smooth and reliable, meeting
            the highest standards of quality and performance.
          </p>
        </div>
      </div>
      <div className={"mt-24 grid grid-cols-3 gap-8"}>
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className={"flex items-center gap-5"}>
                {service.icon}
                <p>{service.title}</p>
              </CardTitle>
              <CardDescription className={"pt-4"}>
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComponentTwo;
