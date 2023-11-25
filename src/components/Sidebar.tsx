"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  advancedPageList,
  basicPageList,
  intermediatePageList,
} from "~/types/pageList";

const Sidebar = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/")?.[2];

  return (
    <div className="order-r sticky top-0 flex h-screen w-[250px] flex-shrink-0 flex-col ">
      <Link href={"/"}>
        <p className="whitespace-nowrap p-3 pb-2 font-bold ">
          Lexical + Tailwind Examples
        </p>
      </Link>
      <hr />
      <div className="overflow-y-scroll px-3 py-2 ">
        <div>
          <p className="font-bold">Basics</p>
          {basicPageList.map((page) => (
            <Link key={`basics-${page}`} href={`/basics/${page}`}>
              <p
                className={clsx(
                  "whitespace-nowrap",
                  page === slug ? "text-blue-800 underline" : "text-gray-700"
                )}
              >
                {" "}
                {page}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <p className="font-bold">Intermediate</p>
          {intermediatePageList.map((page) => (
            <Link key={`intermediate-${page}`} href={`/intermediate/${page}`}>
              <p className=" whitespace-nowrap"> {page}</p>
            </Link>
          ))}
        </div>
        <div>
          <p className="font-bold">Advanced</p>
          {advancedPageList.map((page) => (
            <Link key={`advanced-${page}`} href={`/advanced/${page}`}>
              <p className=" whitespace-nowrap"> {page}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
