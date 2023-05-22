import { motion } from 'framer-motion';
import { HeadFC } from "gatsby";
import * as React from 'react';
import { animate, initial, transition } from "../shared/config";
import { IconVenezuela } from '../shared/ui/Icon';
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
                <div className="left">
                    <img className="photo" src="/photos/erick.jpg" alt="Erick" />
                </div>
                <ul className="right">
                    <li className="presentation">
                        Full stack developer
                    </li>
                    <li>
                        My name is Erick Ramírez, Venezuelan <IconVenezuela /> and I&apos;m developer with experience creating websites for small and medium-sized
                        businesses. Whether you&apos;re trying to gain a job, list your services, or even build an entire
                        online store, I can help!
                    </li>
                    <li>
                        I have experience in HTML5, CSS3, Sass, Stylus, React JS,
                        Gatsby JS, Solid JS, Node JS, Socket io, Express JS, Laravel,
                        Docker, Github, Netlify.
                    </li>
                    <li>
                        I will fully manage your project brief from start to finish
                    </li>
                    <li>
                        Regular communication is very important to me, so let&apos;s keep in touch!
                    </li>
                </ul>

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
