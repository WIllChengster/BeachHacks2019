import Home from './screens/home'
import AvailablePackages from './screens/available_packages'
import Drive from './screens/drive';
import { createStackNavigator, createAppContainer } from 'react-navigation'





const MainNavigator = createStackNavigator({
  // Home: {screen: Home},
  AvailablePackages: {screen: AvailablePackages},
  Drive: {screen: Drive},
}, {
	// headerMode: 'none'
})

const App = createAppContainer(MainNavigator);


export default App