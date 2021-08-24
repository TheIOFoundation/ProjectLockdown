import React from 'react';
import './watermark.css';
import { logo } from '../../assets/icons/icons.js';

const Watermark = ({ fontsize }) => (
    <div
        className={`Watermark`}
        style={{
            transform: `scale(${fontsize})`,
            bottom: `${10 * fontsize}px`,
            left: `${15 + 80 * (fontsize - 1)}px`,
        }}
    >
        {logo}
    </div>
);

export default Watermark;
