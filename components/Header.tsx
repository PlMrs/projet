import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { styles } from "../assets/styles/header.style";

export default function Header({title} : any){
    return(
    <View style={styles.header} >
        <SafeAreaView>
            <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
    </View>
    )
}