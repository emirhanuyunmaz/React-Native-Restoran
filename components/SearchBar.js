import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
export default function SearchBar({term , onTermChange,onTermSubmit}) {
  return (
    <View style={styles.main}>
        <AntDesign style={styles.icon} name="search1" size={24} color="black" />
        <TextInput style={styles.input} placeholder='Ara' value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({

    main:{
        backgroundColor:"lightgray",
        flexDirection:"row",
        margin:10,
        padding:12,
        gap:10
    },
    icon:{

    },
    input:{
        flex:1,
        fontSize:18
    }
})