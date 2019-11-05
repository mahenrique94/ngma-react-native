import { createAppContainer, createStackNavigator } from 'react-navigation'

import { isLogged } from '../utils/auth'

import { routes as homeRoutes } from '../features/home/routes'
import { routes as loginRoutes } from '../features/login/routes'

const Routes = createStackNavigator(
    {
        ...homeRoutes,
        ...loginRoutes
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoginSignUp'
    }
)

export default createAppContainer(Routes)
