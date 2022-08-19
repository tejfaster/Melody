import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

const Completed = () => {
    const { list } = useSelector(item => item.TaskComplete)
    if (list && list[0].name === "") {
        list.shift();
    }
    console.log(list)
    const renderItems = (item) => {
        const data = item.item
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Task Name :- <Text style={{ color: "red" }}>{data.name}</Text></Text>
                <Text style={styles.text}>Task Duration :- <Text style={{ color: "blue" }}>{(Math.floor(data.time / 60000) % 60)}:{(Math.floor(data.time / 1000) % 60)}:{(Math.floor(data.time / 10) % 100)}</Text></Text>
                <Text style={styles.text}>Task Time :- <Text style={{ color: "green" }}>{data.date}</Text></Text>
            </View>
        )
    }
    return (
        <>
            {list && list.length > 0 ? <FlatList
                data={list}
                keyExtractor={item => item.count}
                renderItem={item => renderItems(item)}
            /> : <View style={styles.footer}><Text style={styles.footertext}>No Task Assign...</Text></View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        margin: 5,
        borderRadius: 10
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    footer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footertext:{
        color:"black",
        fontSize: 20,
    }
})

export default Completed