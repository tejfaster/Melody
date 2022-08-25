import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { greencolor, yellowcolor } from '../constant';

const EventCreator = (props) => {
    const { onPress, style, title, colors, textstyle } = props
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <LinearGradient
                colors={colors}
                style={[styles.container, style]}
                onPress={onPress}
            >
                <Text style={[styles.buttontext, textstyle]}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        height: 60,
        width: 100

    },
    buttontext: {
        color: "black",
        fontWeight: '700',
        fontSize: 20,
    }
})

export default EventCreator