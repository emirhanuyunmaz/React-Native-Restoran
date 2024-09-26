import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList'

export default function SearchScreen() {
    const [searcApi,results,errorMessage] = useResult()
    const [term,setTerm] = useState("")




    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }
    return (
    <View>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searcApi(term)} />
            {
                errorMessage !== "" && <Text> {errorMessage} </Text>
            }

            {
                results.length == 0 ? <Text>Veri Bulunamadı</Text> : <>
                    <ResultList title="Ucuz" results={filterResultsByPrice("₺")} />
                    <ResultList title="Uygun" results={filterResultsByPrice("₺₺")} />
                    <ResultList title="Pahalı" results={filterResultsByPrice("₺₺₺")} />
                </>
            }
        
    </View>
  )
}

const styles = StyleSheet.create({})