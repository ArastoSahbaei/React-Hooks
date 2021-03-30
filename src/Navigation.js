import React from 'react'
import { useHistory } from 'react-router-dom'

export const Navigation = () => {
	const history = useHistory()

	return (
		<div className='divWrapper'>
			<span onClick={() => history.push('/usestate')}>useState</span>
			<span onClick={() => history.push('/useeffect')}>useEffect</span>
			<span onClick={() => history.push('/usecontext')}>useContext</span>
			<span onClick={() => history.push('/useRef')}>useRef</span>
			<span onClick={() => history.push('/useCallback')}>useCallback</span>
			<span onClick={() => history.push('/useMemo')}>useMemo</span>
			<span onClick={() => history.push('/useReducer')}>useReducer</span>
			<span onClick={() => history.push('/useImperativeHandle')}>useImperativeHandle</span>
			<span onClick={() => history.push('/useLayoutEffect')}>useLayoutEffect</span>
		</div>
	)
}
