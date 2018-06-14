import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, DatePickerAndroid, TimePickerAndroid, Switch} from 'react-native';
import {Container, Header, Left, Body, Right, Form, Item, Input, Label, Icon, Title} from 'native-base';
import {width, height} from 'react-native-dimension'
import CONST from "../../styles/CONST";

export default class AddTaskScreen extends React.Component {

    state = {
        year: 'yyyy',
        month: 'mm',
        day: 'dd',
        hour: 'hh',
        minute: 'mm',

        text: {
            title: 'Заголовок',
            date: 'Дата',
            header: 'Новая задача',
            time: 'Время',
            reminder: 'Добавить напоминание',
            button:'Сохранить'
        },
        activeSwitch: false
    };

    datePicker = async () => {
        try {
            const {action, year, month, day} =
                await DatePickerAndroid.open({
                    date: new Date(year, month, day)
                });


            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({year, month, day});
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    };

    timePicker = async () => {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                is24Hour: true, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState({hour, minute});
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    };

    render() {
        const {text, year, month, day, hour, minute, activeSwitch} = this.state;

        return (
            <View style={styles.container}>
                <Header noShadow>
                    <Left style={styles.headerLeft}>
                        <TouchableOpacity>
                            <Icon type={'Ionicons'} name={'ios-arrow-back'} style={{color: CONST.colors.white,}}/>
                        </TouchableOpacity>
                    </Left>

                    <Body style={styles.headerBody}>
                    <Title style={{textAlignVertical: 'center'}}>{text.header}</Title>
                    </Body>

                    <Right style={styles.headerRight}/>
                </Header>

                <View style={styles.body}>
                    <Form>
                        <Item stackedLabel style={{width: width(92.5)}}>
                            <Label>
                                {text.title}
                            </Label>
                            <Input/>
                        </Item>

                        <View style={styles.reminder}>
                            <Icon name={'ios-clock-outline'} type={'Ionicons'}/>

                            <Text>{text.reminder}</Text>

                            <Switch value={activeSwitch}
                                    onValueChange={() => this.setState({activeSwitch: !activeSwitch})}/>
                        </View>

                        <View style={styles.dateTime}>
                            <Item stackedLabel style={styles.item}>
                                <Label style={CONST.container}>
                                    {text.date}
                                </Label>

                                <TouchableOpacity style={styles.picker} onPress={this.datePicker}>
                                    <Text style={styles.text}>
                                        {`${day}.${month}.${year}`}
                                    </Text>
                                </TouchableOpacity>
                            </Item>

                            <Item stackedLabel style={styles.item}>
                                <Label style={CONST.container}>
                                    {text.time}
                                </Label>

                                <TouchableOpacity style={styles.picker} onPress={this.timePicker}>
                                    <Text style={styles.text}>
                                        {`${hour}:${minute}`}
                                    </Text>
                                </TouchableOpacity>
                            </Item>
                        </View>
                    </Form>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.textButton}>
                        {text.button}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...CONST.container,
    },
    headerLeft: {
        ...CONST.container,
        alignItems: 'flex-start',
        paddingLeft: width(2.5)
    },
    headerBody: {
        flex: 3,
        ...CONST.flexCenter,
    },
    headerRight: {
        ...CONST.container,
        alignItems: 'flex-end',
    },
    body: {
        ...CONST.container,
    },
    text: {
        ...CONST.container,
        fontSize: 16,
        textAlignVertical: 'center'
    },
    picker: {
        flex: 2
    },
    item: {
        width: width(30)
    },
    dateTime: {
        ...CONST.container,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    reminder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: height(5)
    },
    saveButton:{
        height:height(7.5),
        width:width(90),
        ...CONST.flexCenter,
        backgroundColor:CONST.colors.gradientBlueLight,
        margin:width(5),
        alignSelf:'center'
    },
    textButton:{
        color:CONST.colors.white,
        fontSize:16
    }
});
