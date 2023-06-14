import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from "expo-router";



import { useCallback, useState } from "react";
import {Obicne, ScreenHeaderBtn} from "../../components";
import {COLORS, icons, SIZES} from "../../constants";
import tren from "../../trenirci/tren";
import { ScrollView } from "react-native-gesture-handler";





const Search = () => {

    let poslaniPodatci = useSearchParams();
    
    
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {};
    
    pretrazi =JSON.stringify(poslaniPodatci.id);
        console.log("Nogomet")
        console.log(pretrazi)
        const info = tren.filter(function(tren) {return tren.sport == poslaniPodatci.id});
        
        console.log(info)
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
        headerTitle: ""
        }}/>
        

        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
            style={{
                flex: 1, 
                padding: SIZES.medium}}>
                    

                    <Obicne poslaniPodatci = {info}/>
                    
            </View>
        </ScrollView>


        </SafeAreaView>
    )

    
}

export default Search