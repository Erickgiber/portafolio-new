import { Icon } from "@iconify/react";
import { Link } from "gatsby";
import * as React from 'react';
import { rightList } from '../config';

export const Right = () => {
    return (
        <ul className="right">
            {rightList.map((item, index) => (
                <li key={index}>
                    <Link target={item.target} className={`link ${item.title}`} to={item.link}>
                        {item.icon && <Icon className="gatsby" icon={item.icon}/>}
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
