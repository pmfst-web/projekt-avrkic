import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './placenekartice.style'
import { checkImageURL } from '../../../../app/detalji/profilneSlike'
const PlaceneKartice = ({item, odabran, handleCardPress}) => {
  return (
    
    <TouchableOpacity 
    style={styles.container(odabran, item)} //pozadina
    onPress={() => handleCardPress(item)}
    > 
    <View style={{ justifyContent: "space-around",
    alignItems: "center",
    display:"flex"}} >
      <View style={styles.logoContainer(odabran, item)} //kucica slicice
      >
        
        <Image source={{uri: checkImageURL(item.kljuc)}}
        resizeMode='cover'
        style={styles.logoImage}

        />
        
      </View>
      
      </View>
      <Text style={styles.ime}>{item.ime}</Text>
      <Text style={styles.companyName} numberOfLines={3}>{item.kratkiOpis}</Text>
      

    </TouchableOpacity>
  )
}

export default PlaceneKartice