import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexical + Tailwind</title>
        <meta name="description" content="Lexical Tailwind Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-lg font-bold mb-2">Lexical + Tailwind Examples</h1>
        <p>A bunch of beginner-friendly examples that gets complicated one step at a time</p>
      </main>
    </>
  );
}
