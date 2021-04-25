import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 86,
        height: 96,
        padding: 8,
        borderRadius: 6,
        marginEnd: 8,
        backgroundColor: "#D24C0E"
    },
    contentTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontSize: 10,
        fontWeight: "400",
        textTransform: "uppercase",
        color: "#fff",
    }
});

export default styles;