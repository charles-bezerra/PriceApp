import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderColor: '#0000000F',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginEnd: 8,
    backgroundColor: '#A23A0E',
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default styles;
