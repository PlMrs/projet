import { StyleSheet, Text, View } from "react-native"

export default function Footer(props: any){
    return(
    <View>
        <Text>{props.title}</Text>
    </View>
    )
}

export const styles = StyleSheet.create({
    footer: {
        flex:1,
        justifyContent: "flex-end"
    }
})