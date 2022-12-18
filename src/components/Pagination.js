import React from 'react';
import '../App.css';
import previous from "../icons/previous.png"
import next from "../icons/next.png"

export default function Pagination({page, previousPage, nextPage}){
 
    return (
        <div style={{display: "flex", alignItems: "center", marginTop: "20px", gap: "20px", justifyContent: "Center"}}>
            <button className="btn" onClick={previousPage}> 
                <img src={previous} width="30px" height="30px"/> Previous
            </button>
            <p>{page}</p>
            <button className="btn" onClick={nextPage}> 
                <img src={next} width="30px" height="30px"/> Next
            </button>
        </div>
    )
}