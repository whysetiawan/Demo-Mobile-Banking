import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    backgroundColor: '#446CB3',
    width:'100%'
  },
  sliderContainer: {
    justifyContent:'flex-end',
    marginBottom: '7%'
  },
  indexText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  indexButton: {
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor : '#FFFFF5'
  },
  indexTextButton : {
    color: '#FFFFF5',
    fontSize: 16,
    fontWeight: 'bold'
  },
  registrationTextInput : {
    width: '90%',
    height: '12%',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center'
  },
  registerHeader: {
    borderBottomWidth: 0.7,
    width: '90%',
    borderColor: '#FFFFF5',
    paddingBottom: '10%',
    marginBottom: '5%',
    marginTop: '5%',
    alignSelf: 'center'
  },
  centerContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#446CB3',
  },
  normalText: {
    color: '#FFFFFF',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default styles;