import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
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
    const [searchTerm, setSearchTerm] = useState("");

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
                    <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                      if (searchTerm) {
                        router.push({pathname:`/search/[id]`, params:{job: pokusniPodatak}})
                      }
                    }}
                    />
                    <Obicne poslaniPodatci={tren}/>
                    </View>
                    
            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

export default Home;