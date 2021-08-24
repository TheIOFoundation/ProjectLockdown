import React from 'react';
import './watermark.css';
import { logo } from '../../assets/icons/icons.js';

const Watermark = ({ fontsize }) => (
    <div
        className={`Watermark`}
        style={{transform: `scale(${fontsize})`}}
    >
        {logo}
    </div>
);

export default Watermark;
