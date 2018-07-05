import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <div>
        <h1>SVG </h1>
        <svg
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"

        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{'stopColor':'#7f00ff',stopOpacity:'1'}} />
                    <stop offset="100%" style={{'stopColor':'#e100ff',stopOpacity:'1'}} />
                </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="#f56"/>
            <rect x="20" y="300" width="100" height="100" fill="url(#grad1)"/>
            
            <path 
            d="M 10,150 L 90,10 L 170,150 z"
            fill="transparent"
            stroke="url(#grad1)" 
            strokeWidth="6"/>

            
            
        </svg>

    </div>
)

render(<App/>, document.getElementById('app'))