import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/login';
import Homepage from './pages/Home';

const Home = createStackNavigator({
    Homepage
}, {
    navigationOptions: {
        headerStyle:{backgroundColor:'#4E458C'},
        headerTintColor:'white',
        gesturesEnabled:false
      },
      cardStyle: {
        backgroundColor: 'white'
    }
})


export default createAppContainer(
    createSwitchNavigator({
        Login,
        Home
    })
)