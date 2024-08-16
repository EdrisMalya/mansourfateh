import React from "react";
import Image from "next/image";
import { db } from "@/lib/db";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={"my-24 max-w-7xl mx-auto"}>
      <div className={"grid grid-cols-12 gap-12"}>
        <div className={"col-span-3"}>
          <Image
            src={db.company.logo}
            width={120}
            height={120}
            className={"object-contain"}
            alt={"Test"}
          />
        </div>
        <div className={"col-span-2"}>
          <p className={"font-bold"}>About US</p>
          <ul className={"mt-5"}>
            <li>
              <Link href={"/about"} className={"text-gray-700"}>
                Serves
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Contact US
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                FAQ
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Blog
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className={"col-span-2"}>
          <p className={"font-bold"}>Partners</p>
          <ul className={"mt-5"}>
            <li>
              <Link href={"/about"} className={"text-gray-700"}>
                Support
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Team
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Privacy
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Cookie
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className={"col-span-2"}>
          <p className={"font-bold"}>Resources</p>
          <ul className={"mt-5"}>
            <li>
              <Link href={"/about"} className={"text-gray-700"}>
                Case Studies
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Whitepapers
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Webinars
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                Events
              </Link>
            </li>
            <li className={"mt-3"}>
              <Link href={"/about"} className={"text-gray-700"}>
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className={"col-span-3"}>
          <p className={"font-bold"}>Subscribe</p>
          <p className={"text-xs my-4"}>
            Stay informed with our latest news and updates.
          </p>
          <div className={"flex items-center space-x-4"}>
            <input
              placeholder={"Enter email address"}
              className={
                "px-3 py-2 border border-black flex-1 outline-none ring-0"
              }
            />
            <button className={"px-3 py-2 border border-black"}>Join</button>
          </div>
          <p className={"text-xs mt-4"}>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
      <div className={"h-1 mt-12 bg-gray-200"} />
      <div className={"flex items-center mt-8 text-sm"}>
        <p>© 2024 Mansour Fateh. All rights reserved.</p>
        <div className={"ml-12  flex gap-5"}>
          <p className={"underline"}>Privacy Policy</p>
          <p className={"underline"}>Terms of Service</p>
          <p className={"underline"}>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
