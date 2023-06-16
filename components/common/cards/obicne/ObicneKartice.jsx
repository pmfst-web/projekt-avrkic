import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../app/detalji/profilneSlike'
import styles from './obicnekartice.style'


const ObicneKartice = ({trener, handleNavigate}) => {
  


  return (
    
    <TouchableOpacity 
    style={styles.container} //pozadina
    onPress={handleNavigate}
    > 
    <View >
      <View style={styles.logoContainer} //kucica slicice
      >
        <Image loadingIndicatorSource={require('../../../../assets/images/avrkicprof.jpg')}
        source={{uri: checkImageURL(trener.kljuc)}}     
        resizeMode='cover'
        style={styles.logoImage}
        
        />
        
      </View>
      </View>

      
      <View style={styles.textContainer}>
        <Text style={styles.naziv} numberOfLines={1}>{trener.ime}</Text>
        <Text style={styles.tipovi}>{trener.sport}</Text>

      </View>

    </TouchableOpacity>
  )
}

export default ObicneKartice