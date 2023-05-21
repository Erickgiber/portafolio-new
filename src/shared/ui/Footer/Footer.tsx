import React from 'react';
import {Link} from "gatsby";
import {Icon} from "@iconify/react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <Link to="" className="left">
                    <img className="logo" src="/icons/stargonist.png" alt="Stargonist"/>
                    <p> Stargonist founder </p>
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/in/erickgiber/" className="right">
                    <p> Linkedin </p>
                    <Icon icon="skill-icons:linkedin"/>
                </Link>
            </div>
        </footer>
    );
};
