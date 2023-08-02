import { useRouter } from "next/router";
import { type ReactNode } from "react";
import { kebabToProperCase } from "~/utils/textFormatter";

type Props = {
  children: ReactNode[];
};

const MainLayout = ({ children }: Props) => {
  const [doc, preview] = children;
  const router = useRouter();
  const title = kebabToProperCase(router.query.slug as string);

  return (
    <div className=" grid h-full w-full grid-cols-2 gap-4 p-3">
      <div className="flex flex-col gap-2 border-r">
        <h1 className="text-lg font-bold">{title}</h1>
        <div>{doc}</div>
      </div>
      <div className="">{preview}</div>
    </div>
  );
};

export default MainLayout;
