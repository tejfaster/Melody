import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector } from "react-redux";

import Create from "./Create";
import Pending from "./Pending";
import Completed from './Completed'

const Tab = createBottomTabNavigator();

const Routes = () => {
    const {data} = useSelector(item => item.TaskCreation)

    return (
        <Tab.Navigator>
            {
                data.isActive ? <Tab.Screen name="Pending" component={Pending} /> : <Tab.Screen name="Create" component={Create} />
            }
            <Tab.Screen name="Completed" component={Completed} />
        </Tab.Navigator>
    )
}

const Dashboard = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}

export default Dashboard