import React, { useReducer } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		default:
			throw new Error()
	}
}

export const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, 0)

	return (
		<div>
			Count: {state}
			<button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
			<button onClick={() => dispatch({ type: 'increment' })}>increment</button>
		</div>
	)
}
