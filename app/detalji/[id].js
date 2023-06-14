import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from "expo-router";



import { useCallback, useState } from "react";
import {Profil, Opis, Footer, Tabovi, ScreenHeaderBtn, Opcenito} from "../../components";
import {COLORS, icons, SIZES} from "../../constants";
import tren from "../../trenirci/tren";
import { ScrollView } from "react-native-gesture-handler";

const tabs = ["Opis", "Opcenito", "Budi kreativan"];



const Detalji = ({route, navigation}) => {

    const molimte = useLocalSearchParams();
    const params = useSearchParams(); //dohvati id na kojem smo
    
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const onRefresh = () => {};
    const displayTabContent = () => {
        switch (activeTab) {
            case "Opcenito":
                return<Opcenito
                title="Opcenito"
                points={molimte}
                />//points se gleda kao funkcija i tako pise dalje mos to prominit u nesto drugo
            case "Opis":
                return <Opis
                info={molimte ?? "No data provided"}
                />
            case "Budi kreativan":
                return <Opcenito
                title="Budi kreativan"
                points={molimte}
                />//points se gleda kao funkcija i tako pise dalje mos to prominit u nesto drugo

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
                    //companyLogo = {tren[0].employer_logo}
                    jobtitle = {tren[0].ime}
                    companyName = {tren[0].nacin}
                    Location = {tren[0].sport}
                
                />
                <Tabovi
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                
                
                />
                {displayTabContent()}
            </View>



        </ScrollView>
        <Footer url={tren[0]?.job_google_link ?? 'https://elearning.pmfst.unist.hr/?redirect=0'} />
        </>

        </SafeAreaView>
    )


}

export default Detalji