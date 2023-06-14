import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './obicnekartice.style'

const ObicneKartice = ({trener, handleNavigate}) => {
  return (
    
    <TouchableOpacity 
    style={styles.container} //pozadina
    onPress={handleNavigate}
    > 
    <TouchableOpacity >
      <TouchableOpacity style={styles.logoContainer} //kucica slicice
      >
        
        <Image source={{uri: trener.employer_logo}}
        resizeMode='contain'
        style={styles.logoImage}
        /><Text>{trener.ocjena}</Text> 
        
      </TouchableOpacity>
      </TouchableOpacity>


      <View style={styles.textContainer}>
        <Text style={styles.naziv} numberOfLines={1}>{trener.ocjena}</Text>
        <Text style={styles.tipovi}>{trener.nacin}</Text>

      </View>

    </TouchableOpacity>
  )
}

export default ObicneKartice