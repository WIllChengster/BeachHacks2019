import Home from './screens/home'
import AvailablePackages from './screens/available_packages'
import ChooseLocation from './screens/chooseLocation';
import { createStackNavigator, createAppContainer } from 'react-navigation'





const MainNavigator = createStackNavigator({
  // Home: {screen: Home},
  AvailablePackages: {screen: AvailablePackages},
  ChooseLocation: {screen: ChooseLocation},
}, {
	// headerMode: 'none'
})

const App = createAppContainer(MainNavigator);


export default App