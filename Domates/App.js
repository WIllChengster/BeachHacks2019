import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import DonationFormScreen from './screens/DonationFormScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  DonationForm: {screen: DonationFormScreen},
});

const App = createAppContainer(MainNavigator);

export default App;