import { redirect } from "next/navigation";
import componentMap from "~/components/basics/ComponentMap";
import {
  Difficulties,
  advancedPageList,
  basicPageList,
  intermediatePageList,
  type AdvancedPage,
  type BasicPage,
  type IntermediatePage,
} from "~/types/pageList";
import { kebabToProperCase } from "~/utils/textFormatter";

type Props = {
  params: { difficulties: string; examples: string };
};

const Page = ({ params }: Props) => {
  const difficulty = params.difficulties.toLocaleUpperCase() as Difficulties;

  const validBasicPage =
    difficulty === Difficulties.BASICS &&
    basicPageList.includes(params.examples as BasicPage);
  const validIntermediatePage =
    difficulty === Difficulties.INTERMEDIATE &&
    intermediatePageList.includes(params.examples as IntermediatePage);
  const validAdvancedPage =
    difficulty === Difficulties.ADVANCED &&
    advancedPageList.includes(params.examples as AdvancedPage);
  if (!validBasicPage && !validAdvancedPage && !validIntermediatePage) {
    redirect("/");
  }

  // import component map
  const doc = componentMap[params.examples as BasicPage]?.doc ?? "";
  const preview = componentMap[params.examples as BasicPage]?.preview ?? "";
  const title = kebabToProperCase(params.examples);
  console.log({ doc, preview });
  return (
    <div className=" grid h-full w-full grid-cols-2 gap-4 p-3">
      <div className="flex flex-col gap-2 border-r">
        <h1 className="text-lg font-bold">{title}</h1>

        <div>{doc}</div>
        {/* <button
          onClick={() =>
            (window.location.href =
              "vscode://file/C:/work/lexical-tailwind-examples/src/components/MainLayout.tsx")
          }
        >
          Code
        </button> */}
      </div>
      <div className="">{preview}</div>
    </div>
  );
};

export default Page;
