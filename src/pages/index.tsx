import type {HeadFC, PageProps} from "gatsby";
import * as React from "react";
import '../shared/styles/index.scss';
import {MetaHTML} from "../shared/ui/MetaHTML";
import {Wrapper} from "../shared/ui/Wrapper";
import {animate, initial, initialSkill, transition} from "../shared/config";
import {motion} from "framer-motion";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Wrapper>
            <motion.main
                className="main-index"
                layout
                initial={initial}
                animate={animate}
                transition={transition}
            >
                <div>
                    <div className="title">
                        <span> Hello I&apos;m </span>
                        <p> Erick Ramirez </p>
                    </div>
                    <div className="profile">
                        <motion.img
                            className="photo"
                            src="/photos/erick.jpg"
                            initial={initial}
                            animate={animate}
                            transition={{duration: 0.5}}
                            alt="Erick"/>
                        <div className="skills">
                            <motion.span
                                layout
                                initial={initialSkill}
                                animate={animate}
                                transition={{duration: 0.2}}
                            >
                                Full stack developer
                            </motion.span>
                            <motion.span
                                layout
                                initial={initialSkill}
                                animate={animate}
                                transition={{duration: 0.4}}
                            >
                                Web designer / Figma
                            </motion.span>
                            <motion.span
                                layout
                                initial={initialSkill}
                                animate={animate}
                                transition={{duration: 0.6}}
                            >
                                Software Tester
                            </motion.span>
                            <motion.span
                                layout
                                initial={initialSkill}
                                animate={animate}
                                transition={{duration: 0.8}}
                            >
                                QA Automation
                            </motion.span>
                        </div>
                    </div>
                </div>
            </motion.main>
        </Wrapper>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <MetaHTML>
        <title>Erick Ramirez</title>
    </MetaHTML>
);
