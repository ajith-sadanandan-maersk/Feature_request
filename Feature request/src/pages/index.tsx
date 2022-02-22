import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from 'next/dynamic';

/* Import MFE Component */
// const MFEComponent = dynamic(
//   () => window.mfe.get("./nav").then((factory) => factory()),
//   {
//     ssr: false,
//   }
// );

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <MFEComponent /> */}
      <Head>
        <title>Anchor Flow</title>
        <meta name="description" content="Anchor Flow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="text-anchor">Anchor Flow</div>
    </div>
  );
};

export default Home;
