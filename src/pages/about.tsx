import * as React from 'react';
import {HeadFC} from "gatsby";
import {MetaHTML} from "../shared/ui/MetaHTML";
import {Wrapper} from "../shared/ui/Wrapper";
import {motion} from 'framer-motion';
import {animate, initial, transition} from "../shared/config";


const AboutPage = () => {
    return (
        <Wrapper>
            <motion.main
                className="main-about"
                layout
                initial={initial}
                animate={animate}
                transition={transition}
            >
                <h1 className="title"> About me </h1>
            </motion.main>
        </Wrapper>
    );
};

export default AboutPage;

export const Head: HeadFC = () => (
    <MetaHTML>
        <title> About me | Erick Ramirez </title>
    </MetaHTML>
);
