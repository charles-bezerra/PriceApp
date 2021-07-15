import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 16,
    },  
    imageLogo: {
        width: 200,
        height: 200,
        resizeMode: 'center'
    },
    contentWithoutLogo: {
        width: '100%',
        minHeight: 300,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        borderRadius: 6,
        paddingTop: 16,
        paddingBottom: 16,
    },
});

export default styles;