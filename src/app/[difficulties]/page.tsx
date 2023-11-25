type Props = {
  params: { difficulties: string };
};

export const runtime = "edge";

const page = ({ params }: Props) => {
  return <div>{params.difficulties}</div>;
};

export default page;
