import React from 'react';
import { rightList } from '../config';

export const Right = () => {
    return (
        <ul className="right">
              {rightList.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
    );
};
