import type {HeadFC, PageProps} from "gatsby";
import * as React from "react";
import '../shared/styles/index.scss';
import {Header} from "../shared/ui/Header";
import {Footer} from "../shared/ui/Footer";

const IndexPage: React.FC<PageProps> = () => {

    return (
        <>
            <Header/>

            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <title>Erick Ramirez</title>
        <link rel="icon" href="/icons/favicon.ico"/>
    </>
);
