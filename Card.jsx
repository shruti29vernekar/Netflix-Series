import React from "react";

function Card(props) {
    return(

        <>
        <div className="cards">
          <div className="card">
            <img src={props.imgscr} alt="myPic" className="card-img"/>  
            <div className="card_info">
              <span className="card_category" > {props.title}</span>
              <h3 className="card_title"> {props.sname}</h3>
              <a href={props.links} target="_blanck">
                <button >Watch Now</button>
              </a>
            </div>
        </div>
      </div>
      </>
      );
}

export default Card;