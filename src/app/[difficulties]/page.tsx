type Props = {
  params: { difficulties: string };
};

const page = ({ params }: Props) => {
  return <div>{params.difficulties}</div>;
};

export default page;
