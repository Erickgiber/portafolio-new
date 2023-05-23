import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import "../shared/styles/index.scss";
import { SkillsComponent } from "../shared/ui/Card";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Wrapper>
      <main className="main-skills">
        <SkillsComponent />
      </main>
    </Wrapper>
  );
};

export default SkillsPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> Skills | Erick Ramirez </title>
  </MetaHTML>
);
