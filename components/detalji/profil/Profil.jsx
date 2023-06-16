import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './profil.style'
import {icons} from "../../../constants"

const Profil = ({urlSlike, naslov, ime, lokacija}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{uri: urlSlike}} style={styles.logoImage}/> 
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
          <Text style={styles.locationName}>{lokacija}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profil;