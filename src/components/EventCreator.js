import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { greencolor, yellowcolor } from '../constant';

const EventCreator = (props) => {
    const { onPress, style, title, colors } = props
    return (
        <LinearGradient
            colors={colors}
            style={[styles.container, style]}
        >
            <TouchableOpacity
                onPress={onPress}
            // style={[styles.container, style]}
            >
                <Text style={styles.buttontext}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex:1,

        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        height: 60,
        width: 100

    },
    buttontext: {
        color: "black",
        fontWeight: '700',
        // fontSize: 20,
    }
})

export default EventCreator