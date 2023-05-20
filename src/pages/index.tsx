import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { useState } from "react";

const IndexPage: React.FC<PageProps> = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
     <h1> Hello world </h1>
     <strong> This is a counter: {counter} </strong>
     <button onClick={() => setCounter(prev => prev + 1)}> +1 to counter </button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Erick Ramirez</title>
    <link rel="icon" href="/icons/favicon.ico" />
  </>
);
