import React from 'react'

export const Radio = (props) => {
	return (
		<form className="radio-form">
			<input type='radio' name="color-select" value="red" className="red" onChange={props.handleSelect} />
			<input type='radio' name="color-select" value="green" className="green" onChange={props.handleSelect} />
			<input type='radio' name="color-select" value="blue" className="blue" onChange={props.handleSelect} />
			<input type='radio' name="color-select" value="yellow" className="yellow" onChange={props.handleSelect} />
			<input type='radio' name="color-select" value="orange" className="orange" onChange={props.handleSelect} />
			<input type='radio' name="color-select" value="purple" className="purple" onChange={props.handleSelect} />
		</form>
	)
}
