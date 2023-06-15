
import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import tren from "../../../trenirci/tren"

import { COLORS, SIZES } from '../../../constants'
import PlaceneKartice from "../../common/cards/placene/PlaceneKartice"
import styles from './placene.style'


//quick filter kod za podatke
//info = tren;
//pretrazi ="2";
//info = info.filter(function(item){
  //return item.sport == 'Nogomet'  && item.kljuc == pretrazi;
//}).map(function({kljuc, ime, sport}){
   //return {kljuc, ime, sport};
//});
//console.log(info);

const Placene = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  
  const [odabran, setOdabran] = useState();
  const handleCardPress = (trener) => {
    router.push({pathname: `/detalji/[${trener.kljuc}]`, params: trener});
    setOdabran(trener.kljuc);
  };



  return (

    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Mi preporučujemo</Text>
      
      </View>
      <View style={styles.cardsContainer}>
      {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary}/>
      ) : error ? (
      <Text>Nesto ne radi</Text>
      ): (
      <FlatList
        data = {tren}
        renderItem={({item})=>( 
        <PlaceneKartice item={item}
        odabran={odabran}
        handleCardPress={handleCardPress}
        />
        )}
        keyExtractor={item => item?.kljuc}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
        showsHorizontalScrollIndicator = {false}
        
      />
      )}

      </View>
      
      
    </View>
  )
}

export default Placene