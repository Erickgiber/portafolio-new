import { motion } from 'framer-motion';
import { HeadFC } from "gatsby";
import * as React from 'react';
import { animate, initial, transition } from "../shared/config";
import '../shared/styles/index.scss';
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";


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
                <h1 className="title"> About me waos </h1>
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
