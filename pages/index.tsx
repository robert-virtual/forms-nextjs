import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robert Castillo - Forms</title>
        <meta name="description" content="app for creating forms or quizes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
