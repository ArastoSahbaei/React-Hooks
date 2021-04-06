import React, { useRef } from 'react'

export const UseRef = () => {
	const inputRef = useRef(null)


	return (
		<div>
			<input ref={inputRef} />
			<button onClick={() => inputRef.current.focus()}>Click to focus the input</button>
		</div>
	)
}
