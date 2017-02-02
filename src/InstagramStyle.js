import React from 'react';

const InstagramStyle = (props ) => {
    const gradient = {
        fill: `url(#${props.classNameHash}1)`
    }
    return(
        <svg viewBox = "0 0 400 480" version = "1.1" style={props.style} preserveAspectRatio="xMidYMid meet">

            <rect style={gradient} clipPath={`url(#${props.classNameHash}2`} x="0" y="0" width="400" height="400" />
            <defs>
                <clipPath id={`${props.classNameHash}2`}>
                    <circle cx="30" cy="30" r="30" />
                    
                    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                    <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
                </clipPath>

                <linearGradient id={`${props.classNameHash}1`}>
                    <stop offset="0%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-2; 1" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={props.secondaryColor}>
                        <animate attributeName="offset" values="-1.5; 1.5" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-1; 2" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default InstagramStyle