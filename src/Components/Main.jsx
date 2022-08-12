import React, { useState, useEffect } from 'react'
import { Radio } from './Radio'
import { Grid } from './Grid'
import { ResetButton } from './ResetButton'

export const Main = () => {
	const [selectedColor, setSelectedColor] = useState(null);
	const [color, setColor] = useState('');

	useEffect(() => {
		// console.log(selectedColor);
	}, [selectedColor]);

	const handleSelect = (e) => {
		const value = e.target.value
		setSelectedColor(value);
	}

	const resetDatShit = (e) => {
		window.location.reload(false);
	}

	return (
		<div className="main">
			<Radio handleSelect={handleSelect} />
			<Grid selectedColor={selectedColor} color={color} />
			<ResetButton resetDatShit={resetDatShit} />
		</div>
	)
}
