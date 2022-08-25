import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import EventCreator from '../../components/EventCreator';
import { useSelector, useDispatch } from "react-redux";
import { TaskFinish, TaskCreate } from "../../redux/action/tracker";
import PushNotification from 'react-native-push-notification';
import { greencolor, yellowcolor } from '../../constant';

const Pending = ({ navigation }) => {
    const { data } = useSelector(item => item.TaskCreation)
    const dispatch = useDispatch()
    const [isActives, setIsActives] = useState(data.isActive);
    const [isPause, setIsPause] = useState(data.isPaused);
    const [time, setTime] = useState(0);

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

    useEffect(() => {
        if (time === 1800000) {
            PushNotification.localNotification({
                channelId: "test-channel",
                title: `Task is Running`,
                message: `${data.name} at ${(Math.floor(time / 1000) % 60)}:${(Math.floor(time / 10) % 100)} s`
            })
        }
    }, [time])

    const handleCompleted = () => {
        if (time !== 0) {
            dispatch(TaskFinish(data.name, time, data.count))
            setIsActives(false);
            PushNotification.localNotification({
                channelId: "test-channel",
                title: `Task is Completed`,
                message: `${data.name}is completed at ${(Math.floor(time / 1000) % 60)}:${(Math.floor(time / 10) % 100)} s`
            })
            setTime(0);
            dispatch(TaskCreate("", false, true))
            navigation.navigate("Completed")
        }
    };

    const handlePauseResume = () => {
        if (time !== 0 ) {
            setIsPause(!isPause);
            if(isPause === false){
                PushNotification.localNotification({
                    channelId: "test-channel",
                    title: `Paused`,
                    message: `${data.name} is Paused at ${(Math.floor(time / 1000) % 60)}:${(Math.floor(time / 10) % 100)} s`
                })
            }
        } 
    };

    const handleReset = () => {
        if (!isActives) {
            setIsActives(true)
        } else if (isActives && isPause === true) {
            setIsPause(!isPause)
        } else {
            setIsActives(false);
            PushNotification.localNotification({
                channelId: "test-channel",
                title: `Task is Reset`,
                message: `${data.name} is reset at ${(Math.floor(time / 1000) % 60)}:${(Math.floor(time / 10) % 100)} s `
            })
            setTime(0);
        }
    };

    const handleCancel = () => {
        setIsActives(false);
        Alert.alert(
            `Cancel ${data.name}`,
            "Press Ok to cancel the task",
            [
                {
                    text: "Cancel", onPress: () => {
                        setIsActives(true);
                    },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        dispatch(TaskCreate("", false, true))
                        setIsActives(false);
                        setTime(0);
                        navigation.navigate("Create")
                    }
                }
            ]

        )
    }
    console.log(isActives, isPause)

    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>{data.name}</Text>
            <EventCreator colors={['red', '#FF4200']} style={styles.headercross} textstyle={styles.cross} title="✖" onPress={handleCancel} />
            <View style={styles.subcontainer}>
                <View style={styles.box}><Text style={styles.text}>{(Math.floor(time / 60000) % 60)}</Text></View>
                <View style={styles.box}><Text style={styles.text}>{(Math.floor(time / 1000) % 60)}</Text></View>
                <View style={styles.box}><Text style={styles.text}>{(Math.floor(time / 10) % 100)}</Text></View>
            </View>
            <View style={styles.bottomcontainer}>
                <EventCreator colors={[greencolor, yellowcolor]} title="⏯" onPress={handlePauseResume} />
                <EventCreator colors={[greencolor, yellowcolor]} title={isActives ? "↻" : "▶"} onPress={handleReset} />
                <EventCreator colors={[greencolor, yellowcolor]} title="✔" onPress={handleCompleted} />
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
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 40,
        fontWeight: "700 ",
        color: "black"
    },
    bottomcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // height:"20%",
        marginTop: '10%'
    },
    headertext: {
        fontWeight: "bold",
        fontSize: 35,
        color: "black",
        alignSelf: "center"
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    headercross: {
        width: 35,
        height: 35,
        position: "absolute",
        // alignSelf: 'flex-end',
        // margin: 5,
        right: 5,
        top: 5
    },
    box: {
        borderWidth: 1,
        width: 70,
        alignItems: 'center',
        borderRadius: 10
    },
    cross: {
        fontSize: 10
    }
})

export default Pending