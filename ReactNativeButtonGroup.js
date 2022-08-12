import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ButtonGroup = () => {
    const [value, setValue] = useState('left');

    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={() => setValue('left')}>
                    { value === 'left' ? <View style={[styles.buttonActive, styles.buttonLeft]}>
                        <Text style={styles.activeText}>Weekly</Text>
                    </View> : <View style={[styles.buttonInactive, styles.buttonLeft]}>
                        <Text style={styles.inactiveText}>Weekly</Text>
                    </View> }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setValue('middle')}>
                { value === 'middle' ? <View style={styles.buttonActive}>
                        <Text style={styles.activeText}>Monthly</Text>
                    </View> : <View style={styles.buttonInactive}>
                        <Text style={styles.inactiveText}>Monthly</Text>
                    </View> }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setValue('right')}>
                { value === 'right' ? <View style={[styles.buttonActive, styles.buttonRight]}>
                        <Text style={styles.activeText}>Quarterly</Text>
                    </View> : <View style={[styles.buttonInactive, styles.buttonRight]}>
                        <Text style={styles.inactiveText}>Quarterly</Text>
                    </View> }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonActive: {
        paddingTop: 15,
        alignItems: 'center',
        height: 50,
        width: Dimensions.get('screen').width / 2 - 75,
        backgroundColor: '#5E25FF',
    },
    buttonInactive: {
        paddingTop: 15,
        alignItems: 'center',
        height: 50,
        width: Dimensions.get('screen').width / 2 - 75,
        backgroundColor: 'white',
    },
    buttonLeft: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    buttonRight: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    activeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    }, 
    inactiveText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
    }
});

export default ButtonGroup;
