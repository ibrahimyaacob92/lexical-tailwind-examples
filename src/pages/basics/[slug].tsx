import { useRouter } from "next/router";
import MainLayout from "~/components/MainLayout";
import componentMap from "~/components/basics/ComponentMap";
import { basicPageList, type BasicPage } from "~/types/pageList";

const BasicExamplesPage = () => {
  const router = useRouter();
  const slug = router.query.slug as BasicPage;

  if (!basicPageList.includes(slug)) {
    return <p>Page not found</p>;
  }

  const doc = componentMap[slug]?.doc;
  const preview = componentMap[slug]?.preview;

  return (
    <MainLayout>
      {!doc || !preview ? (
        <div>
          <p>{"Oh no! Page does not yet exist :("}</p>
          <p>
            Feel free to contribute to the
            <a
              className="font-semibold text-purple-700"
              href="https://github.com/ibrahimyaacob92/lexical-tailwind-examples"
              target="_blank"
            >
              {" repo"}
            </a>
          </p>
        </div>
      ) : (
        doc
      )}
      {preview}
    </MainLayout>
  );
};

export default BasicExamplesPage;
