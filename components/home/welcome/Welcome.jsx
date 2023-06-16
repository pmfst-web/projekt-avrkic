import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES, images } from '../../../constants'
const filteri = ["Kickbox", "Nogomet", "Plivanje", "Boks", "Tenis", "BodyBuilding", "Košarka"];

const Welcome = () => {
  const router = useRouter();
  const [aktivanFilter, setAktivanFilter] = useState("");
  return (
    <View>
      
      
      <View style={styles.tabsContainer}>
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      data = {filteri}
      renderItem={({item}) => (
      <TouchableOpacity 
      style={styles.tab(aktivanFilter, item)}
      onPress={()=> {setAktivanFilter(item);
        pretrazi = item;
        
        

    
   
    router.push({pathname: `/search/${item}`});
      }}
      //novi.map( x =>
        //{router.push({pathname: `/search/[${item}]`, params:  x})});
        //}}
      >
        <Text style = {styles.tabText(aktivanFilter, item)}>{item}</Text>
      </TouchableOpacity>
      )}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap: SIZES.small}}
      horizontal
      />

      </View>
    </View>
  )
}

export default Welcome