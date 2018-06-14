import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {
    AddTaskScreen,

} from '../screens/index'

const Stack = {
    AddTask: {
        screen: AddTaskScreen,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }
    },
};

export default RootNavigator = createStackNavigator(Stack, {
    mode: 'card',
    header: null,
    cardStyle: {
        //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    transitionConfig: () => ({
        containerStyle: {}
    }),
    initialRouteName: 'AddTask',
    headerMode: 'screen',
});