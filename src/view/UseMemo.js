import React, { useState, useMemo } from 'react'

export const UseMemo = () => {
	const [count, setCount] = useState(60)

	const expensiveCount = useMemo(() => { return count ** 2 }, [count])

	return (
		<div>

		</div>
	)
}


/*
	MEMOIZATION(useMemo) CACHES RESULT OF A FUNCTION CALL
	IT SHOULD BE USED WHEN REQUIRED FOR EXPENSIVE CALCULATIONS
*/