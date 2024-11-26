import { Icon } from "@iconify/react";
import * as React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <a
          target="_blank"
          href="https://stargonist.vercel.app/"
          className="left"
          rel="noreferrer"
        >
          <img className="logo" src="/icons/stargonist.png" alt="Stargonist" />
          <p> Stargonist founder </p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/erickgiber/"
          className="right"
          rel="noreferrer"
        >
          <p> Linkedin </p>
          <Icon icon="skill-icons:linkedin" />
        </a>
      </div>
    </footer>
  );
};
