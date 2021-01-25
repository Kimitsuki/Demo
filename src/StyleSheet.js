import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    bigWhite: {
      color: 'white',
      fontSize: 22,
      marginTop: 40,
      marginLeft: 20
    },
    smallBlue: {
      color: 'steelblue',
      fontSize: 18,
      marginTop: 10
    },
    bigCircle: {
      width: width/2,
      height: width/2,
      borderRadius: width / 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    smallCircle: {
      width: width/3,
      height: width/3,
      borderRadius: width/6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    findingBox: {
      margin: 15,
      paddingHorizontal: 10,
      borderRadius: 25 / 2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    jobName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 5
    },
});