import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexical + Tailwind</title>
        <meta name="description" content="Lexical Tailwind Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto ">
        <h1 className="text-xl font-bold mb-2">Lexical + Tailwind Examples</h1>
        <p className="text-center">A bunch of beginner-friendly examples that gets complicated one step at a time</p>
        <br />
        <h2 className="text-lg font-bold mb-2">Why?</h2>
        <ul>
          <li>1. Lexical Playground is a good resource, but its not beginner friendly and does not show step by step bare minimum example</li>
          <li>2. Using 100% tailwind instead css file</li>
          <li>3. Copy and paste lexical plugin</li>
        </ul>
        <br />
        <h2 className="text-lg font-bold mb-2">Want to contribute?</h2>
        <a href="https://github.com/ibrahimyaacob92/lexical-tailwind-examples" className="text-blue-400">Github Repo</a>
        <p >Reach out to me <a href="https://twitter.com/ibrycb" className="text-blue-400"> @twitter</a></p>

      </main>
    </>
  );
}
