import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultList({title,results}) {
    const navigation = useNavigation()
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={results}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return(<TouchableOpacity onPress={() => navigation.navigate("Result Show",{id:item.id})}>
            <ResultDetail result={item} />
        </TouchableOpacity>)
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:10,
        marginBottom:10
    }
})