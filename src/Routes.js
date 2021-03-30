import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingView } from './view/LandingView'
import { UseEffect } from './view/UseEffect'
import { UseState } from './view/UseState'
import { UseCallback } from './view/UseCallback'
import { UseContext } from './view/UseContext'
import { UseImperativeHandle } from './view/UseImperativeHandle'
import { UseLayoutEffect } from './view/UseLayoutEffect'
import { UseMemo } from './view/UseMemo'
import { UseReducer } from './view/UseReducer'
import { UseRef } from './view/UseRef'

export const Routes = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={'/usestate'} component={UseState} />
				<Route exact path={'/useeffect'} component={UseEffect} />
				<Route exact path={'/usecallback'} component={UseCallback} />
				<Route exact path={'/usecontext'} component={UseContext} />
				<Route exact path={'/useimperativehandle'} component={UseImperativeHandle} />
				<Route exact path={'/uselayouteffect'} component={UseLayoutEffect} />
				<Route exact path={'/usememo'} component={UseMemo} />
				<Route exact path={'/usereducer'} component={UseReducer} />
				<Route exact path={'/useref'} component={UseRef} />
				<Route component={LandingView} />
			</Switch>
		</BrowserRouter>
	)
}
