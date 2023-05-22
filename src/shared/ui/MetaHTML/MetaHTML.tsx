import * as React from "react";

// eslint-disable-next-line
export const MetaHTML = ({children}: any) => (
    <>
        <link rel="icon" href="/icons/favicon.ico"/>
        <meta name="theme-color" content="#101010"/>
        {children}
    </>
);
