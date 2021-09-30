import { StyleSheet } from 'react-native';
import stylesGlobal from '../../assets/styles';

const styles = StyleSheet.create({
    title: {
        color: '#4F4F4F',
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
        ...stylesGlobal.shadow
    },
});

export default styles;