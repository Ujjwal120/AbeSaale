import React, { useEffect } from 'react';


const Svg = (props) => {

    const here_id = `my-svg-${props.id}`;

    useEffect(() => {

            let rect = document.getElementById(here_id);

            const w = rect.width.baseVal.value;
            const h = rect.height.baseVal.value;

            rect.setAttribute('style', `stroke : ${props.color}; stroke-width : 5px; stroke-dasharray : ${w}, ${2*h+w}; stroke-dashoffset : ${-w-h}`);    
    });


    return <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}> 
        <rect fill = "transparent" width={props.width} height={props.height} id = {here_id} />
    </svg>;
}

export default Svg;