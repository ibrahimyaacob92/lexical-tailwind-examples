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
        <h1>Hello World</h1>
      </main>
    </>
  );
}
