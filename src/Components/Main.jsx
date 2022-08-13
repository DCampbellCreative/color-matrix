import React, { useState, useEffect } from 'react'
import { RadioMenu } from './RadioMenu'
import { Grid } from './Grid'
import { ResetButton } from './ResetButton'

export const Main = () => {
	const [selectedColor, setSelectedColor] = useState(null);
	const [color, setColor] = useState('');
	const [size, setSize] = useState(64)
	const buttonSizes = [16, 64, 124]

	useEffect(() => {
		// console.log(selectedColor);
	}, [selectedColor, size]);

	const handleSelect = (e) => {
		const value = e.target.value
		setSelectedColor(value);
	}

	const handleSize = (e) => {
		const value = e.target.value;
		setSize(value);
	}

	const resetDatShit = (e) => {
		window.location.reload(false);
	}

	return (
		<div className="main">
			<RadioMenu handleSelect={handleSelect} />
			<Grid selectedColor={selectedColor} color={color} size={size} />
			<form className='radio-form'>
				{buttonSizes.map(buttonSize => {
					return <div className="radio-label" key={buttonSize}>
						<input type='radio' name="size-button" value={buttonSize} onChange={handleSize} className='radio-button blue' />
						<label>{buttonSize}</label>
					</div>
				})}
			</form>
			<ResetButton resetDatShit={resetDatShit} />

		</div>
	)
}
