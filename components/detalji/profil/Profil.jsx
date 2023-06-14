import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './profil.style'
import {icons} from "../../../constants"
// za image se koristia style={styles.logoImage}
const Profil = ({urlSlike, naslov, ime, Location}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: urlSlike}} /> 
      </View>
      <View style={styles.naslovBox}>
        <Text style={styles.ime}>{naslov}</Text>
      </View>
      <View style={styles.profilBox}>
        <Text style={styles.profilNaslov}>{ime}</Text>
        <View style={styles.locationBox}>
          <Image
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
          />
          <Text style={styles.locationName}>{Location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Profil