import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        height: "auto",
        padding: 8,
        marginStart: 4,
        marginEnd: 4,
        marginBottom: 4,      
    },
    title: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    image: {
        borderRadius: 4,
        padding: 0,
        width: 60,
        height: 60,
    },
    date: {
        marginTop: 4,
        color: "#7C7C7C",
        fontWeight: '300',
        fontSize: 10,
    }
});

export default styles;
