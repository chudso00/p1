import React from "react";

function Image(props){
	return(
		<div className="image">
			<img src={faker.image.avatar} alt="image" />
		</div>
	);
}