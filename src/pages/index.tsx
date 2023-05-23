import { motion } from "framer-motion";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const IndexPage: React.FC<PageProps> = () => {
  const [isPortrait, setIsPortrait] = React.useState(
    typeof window !== "undefined" &&
      window.matchMedia("(orientation: portrait)").matches
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleOrientationChange = (event: MediaQueryListEvent) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <Wrapper>
      <motion.main
        className="main-index"
        layout
        initial={initial}
        animate={animate}
        transition={isPortrait ? { duration: 0 } : transition}
      >
        <div>
          <div className="title">
            <span> Hello I&apos;m </span>
            <p> Erick Ramirez </p>
          </div>
          <div className="profile">
            <img className="photo" src="/photos/erick.jpg" alt="Erick" />
            <div className="skills">
              <span>Full stack developer</span>
              <span>Web designer / Figma</span>
              <span>Software Tester</span>
              <span>QA Automation</span>
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
