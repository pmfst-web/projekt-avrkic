
import {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'


import tren from '../../../trenirci/tren';
import { useRouter } from 'expo-router'
import {NavigationContainer} from '@react-navigation/native';
import Detalji from '../../../app/detalji/[id]';




import { COLORS } from '../../../constants'
import ObicneKartice from "../../common/cards/obicne/ObicneKartice"
import styles from './obicne.style'


const Obicne = ({poslaniPodatci}) => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  const podatci = poslaniPodatci

  //console.log(podatci);
  return (

    <View style={styles.container}>
  
      <View style={styles.cardsContainer}>
      {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary}/>
      ) : error ? (
      <Text>Nesto ne radi</Text>
      ): (
       podatci?.map((trener)=>(<ObicneKartice
       trener={trener}
       key={`obicni-${trener.kljuc}`}
       handleNavigate={() => router.push({pathname: `/detalji/[${trener.kljuc}]`, params: trener})}
       

       />
       
       ))
      
      )}

      </View>
    </View>
  )
}

export default Obicne