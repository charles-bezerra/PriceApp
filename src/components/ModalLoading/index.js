import React from 'react';
import { Modal, StyleSheet, View, SafeAreaView } from 'react-native';
import Loading from '../Loading';

const styles = StyleSheet.create({
    modalContent: {
        // flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "rgba(0,0,0,0.4)"
    }
});


export default ({visible, setVisible, onRequestClose}) => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={
            () => setVisible(!visible)
        }>
        <SafeAreaView>
            <View style={styles.modalContent}>
                <Loading/>
            </View>
        </SafeAreaView>
    </Modal>
)