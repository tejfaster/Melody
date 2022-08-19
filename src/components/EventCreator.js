import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const EventCreator = (props) => {
    const { onPress, style, title } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}
        >
            <Text style={styles.buttontext}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        alignContent: "center",
        justifyContent: 'center',
        padding: 20,
        paddingHorizontal:30,
        borderRadius: 20,
        marginTop: "40%"
    },
    buttontext: {
        color: "black",
        fontWeight:'700',
        // fontSize: 20,
    }
})

export default EventCreator