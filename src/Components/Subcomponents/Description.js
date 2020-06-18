import React from "react";

function Description(props){
	return(
		<div className="content> 
			<a className="header">{props.name}
			<div className="meta">
				<span className="data">Joined in {props.number}</span>
			</div>
			<div className="description"
				<span className="description">{props.sentence()}</span>
            </div>
        </div>
	);
}