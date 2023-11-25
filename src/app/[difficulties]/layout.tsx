import { redirect } from "next/navigation";
import { type ReactNode } from "react";
import { difficultiesList, type Difficulties } from "~/types/pageList";

type Props = {
  children: ReactNode;
  params: { difficulties: string };
};

const layout = ({ children, params }: Props) => {
  if (
    !difficultiesList.includes(
      params.difficulties.toLocaleUpperCase() as Difficulties
    )
  ) {
    redirect("/");
  }
  return <div>{children}</div>;
};

export default layout;
