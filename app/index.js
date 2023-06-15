import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Text, TextInput } from "react-native";
import tren from "../trenirci/tren"

import { Stack, useRouter } from "expo-router";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from './pocetna.style'
import { COLORS, FONT, icons, images, SIZES } from '../constants';
import { Obicne, Placene, ScreenHeaderBtn, Welcome } from "../components"; 
//const Stack = createNativeStackNavigator()
const pokusniPodatak = [{kljuc: "1",
ime: "Ante Vrkic",
sport: "Kickbox"}]
const Home = () => {

    const router = useRouter();
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {  
        setFilteredDataSource(tren);
        setMasterDataSource(tren);
      }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            // Applying filter for the inserted text in search bar
            const itemData = item.ime
              ? item.ime.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: { backgroundColor:COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn iconUrl = {icons.menu} dimension ="60%"/>
        ),
        headerRight: () => (
            <ScreenHeaderBtn iconUrl = {images.profile} dimension ="100%"/>
        ),
        headerTitle: ""
        }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
            style={{
                flex: 1, 
                padding: SIZES.medium}}>
                    <View>
                        <View style={styles.container}>
                        <Text style={styles.userName}>Moja aplikacija</Text>
                        <Text style={styles.welcomeMessage}>Pronađi svog trenera</Text>
                        </View></View>
                    <Placene/>
                    <View style={styles.container}>
                    <View style={styles.header}>
                    <Text style={styles.headerTitle}>Svi treneri</Text>
                    </View>
                    <Welcome/>
                    <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                    <TextInput 
                    style={styles.searchInput}
                    value={search}
                    onChangeText={(text) => {searchFilterFunction(text)}}
                    placeholder='Pretraži trenere'
                    />

          
        </View>
        
      </View>
                    <Obicne poslaniPodatci={filteredDataSource}/>
                    </View>
                    
            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

export default Home;