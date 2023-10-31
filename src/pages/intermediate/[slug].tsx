import { useRouter } from "next/router";
import MainLayout from "~/components/MainLayout";
import NoDocYet from "~/components/NoDocYet";
import { intermediatePageList, type IntermediatePage } from "~/types/page";

const IntermediateExamplesPage = () => {
  const router = useRouter();
  const slug = router.query.slug as IntermediatePage;

  if (!intermediatePageList.includes(slug)) {
    return <p>Page not found</p>;
  }

  const doc = <NoDocYet />
  const preview = undefined

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

export default IntermediateExamplesPage;
