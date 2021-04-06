import React, { useState, useCallback } from 'react'

export const UseCallback = () => {
	const [count, setcount] = useState(60)
	const showCount = useCallback(() => { alert(`Count: ${count}`) }, [count])

	return (
		<>
			<randomChildComponent handler={showCount} />
		</>
	)
}

/*
	useCallback is required when you want to avoid
	unneccecary re-renders of any child component
*/