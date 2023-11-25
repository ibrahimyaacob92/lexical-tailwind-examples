import { type Metadata } from "next";

export const runtime = "edge";

// Static metadata
export const metadata: Metadata = {
  title: "Lexical + Tailwind",
  description: "Lexical Tailwind Example",
};

const MainPage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center ">
      <h1 className="mb-2 text-xl font-bold">Lexical + Tailwind Examples</h1>
      <p className="text-center">
        A bunch of beginner-friendly examples that gets complicated one step at
        a time
      </p>
      <br />
      <h2 className="mb-2 text-lg font-bold">Why?</h2>
      <ul>
        <li>
          1. Lexical Playground is a good resource, but its not beginner
          friendly and does not show step by step bare minimum example
        </li>
        <li>2. Using 100% tailwind instead css file</li>
        <li>3. Copy and paste lexical plugin</li>
      </ul>
      <br />
      <h2 className="mb-2 text-lg font-bold">Want to contribute?</h2>
      <a
        href="https://github.com/ibrahimyaacob92/lexical-tailwind-examples"
        className="text-blue-400"
      >
        Github Repo
      </a>
      <p>
        Reach out to me{" "}
        <a href="https://twitter.com/ibrycb" className="text-blue-400">
          {" "}
          @twitter
        </a>
      </p>
    </main>
  );
};

export default MainPage;
