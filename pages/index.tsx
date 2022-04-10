import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Castillo - Forms</title>
        <meta name="description" content="app for creating forms or quizes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="bg-gray-100 h-52 flex flex-col px-32 gap-4 p-4">
          <h1>Crear Formulario</h1>
          <Link href={"/newform"}>
            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 bg-white text-orange-400 border-2 border-white hover:border-purple-400  transition-all "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className=" text-gray-600">En blanco</span>
            </div>
          </Link>
        </header>
        <section className="px-32 py-4">
          <h3>Formularios recientes</h3>
          <div>
            <p className="text-center">aun no tienes formularios</p>
          </div>
        </section>
      </main>
    </>
  );
}
