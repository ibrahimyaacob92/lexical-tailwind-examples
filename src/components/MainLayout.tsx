import React, { ReactNode } from "react";

type Props = {
  children: ReactNode[];
};

const MainLayout = ({ children }: Props) => {
  const [doc, preview] = children;
  return (
    <div className="grid w-full grid-cols-2">
      <div className="">{doc}</div>
      <div className="">{preview}</div>
    </div>
  );
};

export default MainLayout;
