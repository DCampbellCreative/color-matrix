import React from 'react'

export const RadioMenu = (props) => {

	const radioColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple']

	return (
		<form className="radio-form">
			{radioColors.map(radioColor => {
				return <input type='radio' name="color-select" key={radioColor} value={radioColor} className={radioColor} onChange={props.handleSelect} />
			})}
		</form>
	)
}
