import { Icon } from "@iconify/react";
import { Link } from "gatsby";
import * as React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <Link target="_blank" to="http://stargonist.website/" className="left">
          <img className="logo" src="/icons/stargonist.png" alt="Stargonist" />
          <p> Stargonist founder </p>
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/erickgiber/"
          className="right"
        >
          <p> Linkedin </p>
          <Icon icon="skill-icons:linkedin" />
        </Link>
      </div>
    </footer>
  );
};
