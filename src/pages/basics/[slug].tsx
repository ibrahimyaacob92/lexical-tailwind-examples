import { useRouter } from "next/router";
import MainLayout from "~/components/MainLayout";
import componentMap from "~/components/basics/ComponentMap";
import { basicPageList, type BasicPage } from "~/types/page";

const BasicExamplesPage = () => {
  const router = useRouter();
  const slug = router.query.slug as BasicPage;

  if (!basicPageList.includes(slug)) {
    return <p>Page not found</p>;
  }

  const { doc, preview } = componentMap[slug];

  return (
    <MainLayout>
      {doc}
      {preview}
    </MainLayout>
  );
};

export default BasicExamplesPage;
