import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { requestUserPermission, notificationListener, createChannels } from "../../utils/pushNotification";

import { useSelector } from "react-redux";

import Create from "./Create";
import Pending from "./Pending";
import Completed from './Completed'
import About from "./About";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs = () => {
    const { data } = useSelector(item => item.TaskCreation)
    useEffect(() => {
        requestUserPermission()
        notificationListener()
        createChannels()
    }, [])


    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            {
                data.isActive ? <Tab.Screen name="Pending" component={Pending} /> : <Tab.Screen name="Create" component={Create} />
            }
            <Tab.Screen name="Completed" component={Completed} />
        </Tab.Navigator>
    )
}

const Drawers = () => {
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName="Tracker">
            <Drawer.Screen name="Tracker" component={Tabs} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}


const Dashboard = () => {
    return (
        <NavigationContainer>
            <Drawers />
        </NavigationContainer>
    )
}

export default Dashboard