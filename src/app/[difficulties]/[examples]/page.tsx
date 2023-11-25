import { redirect } from "next/navigation";
import AdvancedComponentMap from "~/components/advanced/AdvancedComponentMap";
import BasicComponentMap from "~/components/basics/BasicComponentMap";
import IntermediateComponentMap from "~/components/intermediate/IntermediateComponentMap";
import {
  Difficulties,
  advancedPageList,
  basicPageList,
  intermediatePageList,
  type AdvancedPage,
  type BasicPage,
  type IntermediatePage,
  type PageContent,
} from "~/types/pageList";
import { kebabToProperCase } from "~/utils/textFormatter";

export const runtime = "edge";

type Props = {
  params: { difficulties: string; examples: string };
};

export function generateMetadata({ params }: Props) {
  return {
    title: kebabToProperCase(params.examples),
  };
}

const componentMap: Record<string, PageContent> = {
  ...BasicComponentMap,
  ...AdvancedComponentMap,
  ...IntermediateComponentMap,
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

  console.log({
    componentMap: componentMap[params.examples],
    exp: params.examples,
  });
  // import component map
  const doc = componentMap[params.examples]?.doc;
  const preview = componentMap[params.examples]?.preview;
  const title = kebabToProperCase(params.examples);

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

export default Page;
