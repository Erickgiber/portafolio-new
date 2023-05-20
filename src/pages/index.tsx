import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
     <h1> Hello world </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Erick Ramirez</title>
    <link rel="icon" href="/static/images/favicon.ico" />
  </>
);
