import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: "grey",
        paddingTop: StatusBar.currentHeight
    },
    title: {
        color: 'red',
    }
})