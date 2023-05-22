import React from 'react';
import {rightList} from '../config';
import {Link} from "gatsby";
import {Icon} from "@iconify/react";

export const Right = () => {
    return (
        <ul className="right">
            {rightList.map((item, index) => (
                <li key={index}>
                    <Link className={`link ${item.title}`} to={item.link}>
                        {item.icon && <Icon className="gatsby" icon={item.icon}/>}
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
