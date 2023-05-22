import {Header} from "../Header";
import {BackgroundAnimation} from "../Background";
import {Footer} from "../Footer";
import * as React from "react";
import {ReactElement} from "react";

// eslint-disable-next-line
export const Wrapper = ({children}: any): ReactElement => (
    <>
        <Header/>
        <BackgroundAnimation/>
        {children}
        <Footer/>
    </>
);
