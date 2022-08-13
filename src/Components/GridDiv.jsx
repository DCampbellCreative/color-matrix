import React, { useState } from 'react'

export const GridDiv = ({ props }) => {

	const [color, setColor] = useState('');

	const handleClick = (e) => {
		setColor(props.selectedColor);
	}

	return (
		<div className="grid-div" style={{ backgroundColor: color }} onClick={handleClick}></div>
	)
}
