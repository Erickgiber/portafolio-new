import { motion } from "framer-motion";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { SkillsComponent } from "../shared/ui/Card";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Wrapper>
      <motion.main
        className="main-skills"
        layout
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <SkillsComponent />
      </motion.main>
    </Wrapper>
  );
};

export default SkillsPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> Skills | Erick Ramirez </title>
  </MetaHTML>
);
