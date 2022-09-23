import React from "react";
import DeretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DeretaFilho 
                nome="Junior" 
                idade={20} 
                nerd={true}
            />
            <DeretaFilho 
                nome="Gabriel" 
                idade={17} 
                nerd={false}
            />
        </div>
    )      
}