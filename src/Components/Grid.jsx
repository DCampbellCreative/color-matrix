import React from 'react'
import { GridDiv } from './GridDiv'

export const Grid = (props) => {
	console.log(props.size)

	return (
		<div className='grid'>
			{Array(props.size).fill().map((item) => <GridDiv props={props} />)}
		</div>
		// <div className='grid'>
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// 	<GridDiv props={props} />
		// </div>
	)
}
