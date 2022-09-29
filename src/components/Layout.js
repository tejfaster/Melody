import React,{memo} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Layout = (props) => {
    const { style, title, textstyle } = props
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.textcontainer, textstyle]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
    },
    textcontainer: {
        fontWeight:'700',
        fontSize: 20,
        color:'black'
    }
})
export default Layout
