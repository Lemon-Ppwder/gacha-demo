import Head from "next/head";
import GachaDemo from "../src/GachaDemo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gacha Fashion Demo</title>
      </Head>
      <main>
        <GachaDemo />
      </main>
    </div>
  );
}