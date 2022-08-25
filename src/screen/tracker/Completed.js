import React from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import EventCreator from '../../components/EventCreator';
import { TaskDelete } from "../../redux/action/tracker";

const Completed = () => {
    const dispatch = useDispatch()
    const { list } = useSelector(item => item.TaskComplete)
    const handleDelete = (item) => {
        Alert.alert(
            `Delete ${item.item.name}`,
            "Press Ok to delete",
            [
                {
                    text: "Cancel", onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        dispatch(TaskDelete(item.item.count))
                    }
                }
            ]
        )
    }


    const renderItems = (item) => {
        const data = item.item
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Task Name :- <Text style={{ color: "red" }}>{data.name}</Text></Text>
                <EventCreator colors={['red', '#FF4200']} textstyle={styles.cross} style={styles.headercross} title="✖" onPress={() => handleDelete(item)} />
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footertext: {
        color: "black",
        fontSize: 20,
    },
    headercross: {
        width: 35,
        height: 35,
        position: 'absolute',
        top: 5,
        alignSelf: 'flex-end',
        right: 5
    },
    cross:{
        fontSize:10
    }
})

export default Completed