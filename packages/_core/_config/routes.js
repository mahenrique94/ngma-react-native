import { createAppContainer, createStackNavigator } from 'react-navigation'

import { routes as loginRoutes } from '../features/login/routes'

const Routes = createStackNavigator(
    {
        ...loginRoutes
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoginSignUp'
    }
)

export default createAppContainer(Routes)
