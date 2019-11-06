import React from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },
    input: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      width: '80%',
      marginBottom: 10,
      borderRadius: 15
    },
    btnText: {
      color:'green',
      fontSize: 20
    }
   });

export default styles;