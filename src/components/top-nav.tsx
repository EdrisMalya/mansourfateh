import React from "react";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { db } from "@/libs/db";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const TopNav = () => {
  return (
    <div>
      <div className={"border-b bg-gray-200 p-2 "}>
        <div
          className={
            "max-w-6xl mx-auto flex items-center justify-end gap-12 text-sm"
          }
        >
          <div className={"flex items-center gap-2"}>
            <HomeIcon size={20} />
            <p>{db.company.address}</p>
          </div>
          <div className={"flex items-center gap-2"}>
            <PhoneIcon size={20} />
            <p>{db.company.phone}</p>
          </div>
          <div className={"flex items-center gap-2"}>
            <MailIcon size={20} />
            <p>{db.company.email}</p>
          </div>
        </div>
      </div>
      <div className={"py-5 border-b-[3px] border-green-500"}>
        <div className={"max-w-6xl mx-auto"}>
          <div className={"flex items-center justify-between"}>
            <div>
              <Image
                src={db.company.logo}
                width={60}
                height={60}
                alt={"Logo"}
                className={"object-contain"}
              />
            </div>
            <div className={"flex space-x-5"}>
              {db.website.links.map((link) => (
                <div key={link.path}>
                  <Link
                    className={clsx("hover:font-bold text-gray-600", {
                      "bg-green-400 rounded-lg shadow-lg text-white py-2 px-4":
                        link.path === "/contact",
                    })}
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
