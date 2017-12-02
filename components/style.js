import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#446CB3',
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
  bigTextSize: {
    fontSize: 24,
    color: '#FFFFF5'
  },
  registerHeader: {
    borderBottomWidth: 0.7,
    borderColor: '#FFFFF5',
    paddingBottom: '10%',
    marginBottom: '5%',
    marginTop: '5%'
  }
})

export default styles;