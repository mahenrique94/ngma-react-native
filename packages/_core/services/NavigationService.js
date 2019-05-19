import { NavigationActions } from 'react-navigation'

let _navigator = null

const setTopLevelNavigator = navigatorRef => (_navigator = navigatorRef)

const navigate = (routeName, params) =>
    _navigator.dispatch(
        NavigationActions.navigate({
            params,
            routeName
        })
    )

export default {
    navigate,
    setTopLevelNavigator
}
