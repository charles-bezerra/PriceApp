import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    counterAreaContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#F1F0F0",
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 16
    },
    counterAreaNumber: {
        fontSize: 20,
        fontWeight: "400"
    }
});

export default styles;