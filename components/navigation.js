import { StackNavigator } from 'react-navigation';
import Index from '../src/index';
import Register from '../src/RegisterEmailAndPhone';

export default StackScreen = StackNavigator ({
    Index: { screen: Index,
    navigationOptions: {
      header: null
        } 
    },
    Register : { screen: Register,
    navigationOptions: {
      title: 'Daftar',
      headerTitleStyle: {
          color: '#ffffff'
      },
      headerStyle: {
          backgroundColor: '#446CB3',
      }
        }
    },
})