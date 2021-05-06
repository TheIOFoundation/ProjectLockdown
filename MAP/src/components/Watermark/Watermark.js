import React from 'react';
import './watermark.css';

const Watermark = ({ dark, fontsize }) => (
    <div
        className={`Watermark`}
        style={{
            fontSize: `${fontsize}vw`,
        }}
    >
       PROJECT LOCKDOWN
    </div>
);

export default Watermark;
