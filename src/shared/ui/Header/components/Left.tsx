import {Icon} from '@iconify/react';
import {Link} from 'gatsby';
import React from 'react';
import {leftList} from "../config";

export const Left = () => {
    return (
        <ul className="left">
            {leftList.map((item, index) => (
                <li key={index}>
                    <Link className="link" target={item.target} to={item.link}>
                        {item.icon && <Icon icon={item.icon}/>}
                        {item.title}
                    </Link>
                </li>

            ))}
        </ul>
    );
};