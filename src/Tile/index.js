import React from 'react';
import '../style.css';

function Tile(props){
    return  (
        <div className="tile">
           <h4>{props.title}</h4>
           <img src={props.imageUrl}/>
        </div>
    );
}

export { Tile };