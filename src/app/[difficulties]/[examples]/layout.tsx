import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;
