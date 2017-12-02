import { StackNavigator } from 'react-navigation';
import Index from '../src/index';
import Register from '../src/RegisterEmailAndPhone';
import Register2 from '../src/RegisterStep2';
import Login from '../src/Login';

export default StackScreen = StackNavigator ({
    Index: { screen: Index,
    navigationOptions: {
      header: null
        } 
    },
    Register : { screen: Register },
    Register2: { screen: Register2 },
    Login : { screen: Login },
})