import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './placenekartice.style'

const PlaceneKartice = ({item, odabran, handleCardPress}) => {
  return (
    
    <TouchableOpacity 
    style={styles.container(odabran, item)} //pozadina
    onPress={() => handleCardPress(item)}
    > 
    <TouchableOpacity >
      <TouchableOpacity style={styles.logoContainer(odabran, item)} //kucica slicice
      >
        
        <Image source={{uri: item.employer_logo}}
        resizeMode='contain'
        style={styles.logoImage}
        /><Text>{item.ocjena}</Text> 
        
      </TouchableOpacity>
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={3}>{item.kratkiOpis}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.location} numberOfLines={1}>{item.ocjena}</Text>
        <Text style={styles.location}>{item.ime}</Text>

      </View>

    </TouchableOpacity>
  )
}

export default PlaceneKartice