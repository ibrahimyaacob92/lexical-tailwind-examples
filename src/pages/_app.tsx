import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { basicPageList } from "~/types/page";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen w-[200px] border-r p-3">
        <p>Sidebar</p>
        <p className="font-bold">Basic</p>
        {basicPageList.map((page) => (
          <Link key={`basics-${page}`} href={`/basics/${page}`}>
            <p> {page}</p>
          </Link>
        ))}
        <p className="font-bold">Intermediate</p>
        <p className="font-bold">Advanced</p>
      </div>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
