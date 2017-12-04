import { StackNavigator } from 'react-navigation';
import Index from '../src/index';
import Register from '../src/RegisterStep1';
import Register2 from '../src/RegisterStep2';
import Login from '../src/Login';
import Home from '../src/home_screen';
import ConsumerRegistration from '../src/consumer_registration';
import ConsumerRegistration2 from '../src/consumer_registration2';

export default StackScreen = StackNavigator ({
    Index: { screen: Index,
    navigationOptions: {
      header: null
        } 
    },
    Register : { screen: Register },
    Register2: { screen: Register2 },
    Login : { screen: Login },
    Home : { screen: Home },
    ConsumerRegistration: { screen: ConsumerRegistration },
    ConsumerRegistration2: { screen: ConsumerRegistration2 },
})