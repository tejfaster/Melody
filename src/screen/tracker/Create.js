import React from "react";
import { View, TextInput, StyleSheet, Alert, } from 'react-native'
import EventCreator from "../../components/EventCreator";
import PushNotification from "react-native-push-notification";
import RazorpayCheckout from 'react-native-razorpay';

import { useSelector, useDispatch } from "react-redux";
import { TaskCreate } from "../../redux/action/tracker";
import { payment } from "../../utils/payment";

const Create = ({ navigation }) => {
    const [data, setData] = React.useState("")
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (data) {
            dispatch(TaskCreate(data, true, false))
            PushNotification.localNotification({
                channelId: "test-channel",
                title: `Task is started`,
                message: `${data}`
            })
        } else {
            Alert.alert(
                "Task",
                "Please Enter Your task name...",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed")
                    }
                ]
            )
        }
    }

return (
    <View style={styles.container}>
        <View style={styles.subcontainer}>
            <TextInput
                style={styles.input}
                onChangeText={item => setData(item)}
                placeholder="Enter Your New Task here..."
                placeholderTextColor={"black"}
            />
            <EventCreator
                title="Start"
                onPress={handleSubmit}
            />
            
        </View>

    </View>
)
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    subcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        fontSize: 20,
        alignSelf: 'center',
        color: "black"
    },
})

export default Create