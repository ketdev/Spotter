import React from 'react';
import { View, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { COLOR_SURFACE } from './Theme';

export default function SwipeModal({ children, onClose, ...props }) {
    return (
        <Modal animationType="slide" presentationStyle="pageSheet" {...props}>
            <TouchableWithoutFeedback onPressOut={(e) => {
                if (e.nativeEvent.locationY < 0) {
                    onClose();
                }
            }}>
                <View style={styles.modalOuter}>
                    <View style={styles.modalInner}>
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalInner: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: COLOR_SURFACE
    },
    modalOuter: {
        height: "100%",
        backgroundColor: COLOR_SURFACE
    }
});