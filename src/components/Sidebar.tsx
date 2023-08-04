import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  advancedPageList,
  basicPageList,
  intermediatePageList,
} from "~/types/page";

const Sidebar = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div className="sticky top-0 flex h-screen w-[200px] flex-col gap-2 border-r p-3">
      <Link href={"/"}>
        <p className="font-bold">Lexical + Tailwind Examples</p>
      </Link>
      <hr />
      <div>
        <p className="font-bold">Basic</p>
        {basicPageList.map((page) => (
          <Link key={`basics-${page}`} href={`/basics/${page}`}>
            <p
              className={clsx(
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
          <Link key={`basics-${page}`} href={`/basics/${page}`}>
            <p> {page}</p>
          </Link>
        ))}
      </div>
      <div>
        <p className="font-bold">Advanced</p>
        {advancedPageList.map((page) => (
          <Link key={`basics-${page}`} href={`/basics/${page}`}>
            <p> {page}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;