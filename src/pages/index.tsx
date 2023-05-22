import type {HeadFC, PageProps} from "gatsby";
import * as React from "react";
import '../shared/styles/index.scss';
import {Header} from "../shared/ui/Header";
import {Footer} from "../shared/ui/Footer";
import {BackgroundAnimation} from "../shared/ui/Background";
import {MetaHTML} from "../shared/ui/MetaHTML";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header/>
            <BackgroundAnimation/>
            <main className="main-index">
                <div>
                    <div className="title">
                        <span> Hello I&apos;m </span>
                        <p> Erick Ramirez </p>
                    </div>
                    <div className="profile">
                        <img className="photo" src="/photos/erick.jpg" alt="Erick"/>
                        <div className="skills">
                            <span> Full stack developer </span>
                            <span> Web designer / Figma </span>
                            <span> Software Tester </span>
                            <span> QA Automation </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <MetaHTML>
        <title>Erick Ramirez</title>
    </MetaHTML>
);
