import { Link } from 'gatsby';
import React from 'react';
import { leftList } from "../config";

export const Left = () => {
    return (
        <ul className='left'>
            {leftList.map((item, index) => (
                <Link to={item.link} key={index}>
                    <li >{item.title}</li>
                </Link>
            ))}
        </ul>
    );
};
