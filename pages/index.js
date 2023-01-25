import Head from 'next/head';
import { Header, Projects, UpperSection } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agustin Gomez Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Header />
        <UpperSection />
        <Projects />
      </main>
    </>
  );
}
