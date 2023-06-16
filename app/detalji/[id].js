import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from "expo-router";



import { useCallback, useState } from "react";
import {Profil, Opis, Footer, Tabovi, ScreenHeaderBtn, Opcenito} from "../../components";
import {COLORS, icons, SIZES} from "../../constants";
import tren from "../../trenirci/tren";
import { ScrollView } from "react-native-gesture-handler";
import { checkImageURL } from "./sporedneSlike";
import { checkURL } from "./linkoviIG";
const tabs = ["Opis", "Općenito"];



const Detalji = () => {

    const trener = useLocalSearchParams();

    
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const onRefresh = () => {};

    const displayTabContent = () => {
        switch (activeTab) {
            case "Općenito":
                return<Opcenito
                title="Opcenito"
                points={trener}
                />
            case "Opis":
                return <Opis
                info={trener ?? "No data provided"}
                />


        }


    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn
            iconUrl={icons.left}
            dimension="60%"
            handlePress={() => router.back()}
            />
        ),
        headerRight: () => (
            <ScreenHeaderBtn
            iconUrl={icons.share}
            dimension="60%"
            />
        ),
        headerTitle: ""
        }}/>
        <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={

            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>

            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Profil
                    urlSlike = {checkImageURL(trener.kljuc)}
                    naslov = {trener.ime}
                    ime = {trener.sport}
                    lokacija = {trener.lokacija}
                
                />
                <Tabovi
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                
                
                />
                {displayTabContent()}
            </View>



        </ScrollView>
        <Footer url={tren[0]?.link ?? checkURL(trener.kljuc)} />
        </>

        </SafeAreaView>
    )


}

export default Detalji