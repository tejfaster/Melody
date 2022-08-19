import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import EventCreator from '../../components/EventCreator';
import { useSelector, useDispatch } from "react-redux";
import { TaskFinish, TaskCreate } from "../../redux/action/tracker";

const Pending = ({ navigation }) => {
    const { data } = useSelector(item => item.TaskCreation)
    const dispatch = useDispatch()
    const [isActives, setIsActives] = useState(data.isActive);
    const [isPause, setIsPause] = useState(data.isPaused);
    const [time, setTime] = useState(0);


    console.log(data)

    useEffect(() => {
        let interval = null;

        if (isActives && isPause === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActives, isPause]);

    const handleCompleted = () => {
        dispatch(TaskFinish(data.name, time, data.count))
        setIsActives(false);
        setTime(0);
        dispatch(TaskCreate("", false, true))
        navigation.navigate("Completed")
    };

    const handlePauseResume = () => {

        setIsPause(!isPause);
    };

    const handleReset = () => {
        if (!isActives) {
            setIsActives(true)
        } else {
            setIsActives(false);
            setTime(0);
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>{data.name}</Text>
            <View style={styles.subcontainer}>
                <Text style={styles.text}>{(Math.floor(time / 60000) % 60)}</Text>
                <Text style={styles.text}>{(Math.floor(time / 1000) % 60)}</Text>
                <Text style={styles.text}>{(Math.floor(time / 10) % 100)}</Text>
            </View>
            <View style={styles.bottomcontainer}>
                <EventCreator title="⏯" onPress={() => handlePauseResume()} />
                <EventCreator title="↻" onPress={() => handleReset()} />
                <EventCreator title="✔" onPress={() => handleCompleted()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    subcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 40,
        fontWeight: "700 ",
        color: "black"
    },
    bottomcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    headertext: {
        fontWeight: "bold",
        fontSize: 35,
        color: "black",
        alignSelf: "center"
    }
})

export default Pending