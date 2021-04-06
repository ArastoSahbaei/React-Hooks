import React, { useLayoutEffect } from 'react'

export const UseLayoutEffect = () => {

	useLayoutEffect(() => {
		/* this block will run after the render but before painting to screen */
	}, [])

	return (
		<div>

		</div>
	)
}

/*

useLayoutEffect works just like useEffect with just 1 small difference.
the callback effect will run after render but before painting to screen

CAUTION: This will block visual updates until your callback is finished.

*/