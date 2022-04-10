import Head from "next/head";
import { useState } from "react";

const NewForm = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  return (
    <>
      <Head>
        <title>Nuevo formulario</title>
      </Head>
      <div className="p-4" style={{ backgroundColor }}>
        <header className="flex flex-col">
          <input
            className="text-3xl border-b-2 border-gray-400"
            type="text"
            value={"Nuevo Formulario"}
          />
          <input
            className=" border-b-2 border-gray-400"
            type="text"
            placeholder="Descripcion formulario"
          />
        </header>
      </div>
    </>
  );
};

export default NewForm;
