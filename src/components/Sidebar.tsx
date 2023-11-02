import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  advancedPageList,
  basicPageList,
  intermediatePageList,
} from "~/types/pageList";

const Sidebar = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div className="sticky top-0 flex h-screen w-[250px] flex-shrink-0 flex-col order-r ">
      <Link href={"/"}>
        <p className="font-bold whitespace-nowrap p-3 pb-2 ">Lexical + Tailwind Examples</p>
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
