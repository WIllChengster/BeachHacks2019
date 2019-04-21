import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DonationFormScreen from './screens/DonationFormScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  DonationForm: {screen: DonationFormScreen},
});

const App = createAppContainer(MainNavigator);

export default App;