import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TaskComponent} from '../../components/index'
import CONST from "../../styles/CONST";
import {Fab, List, Item, Header, Left, Input, Right, Button, Icon, Title} from 'native-base'
import {width, height, totalSize} from 'react-native-dimension'
import { Text } from 'react-native'


export default class AddTaskScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            list: [
                {
                    title: 'Съесть кашу',
                    data: 'Сегодня',
                    hTime: 11,
                    mTime: 11,
                },
                {
                    title: 'Помыть посуду',
                    data: 'Вчера',
                    hTime: 11,
                    mTime: 12,
                },
                {
                    title: 'Лорен ипсум блять Лорен ипсум блять Лорен ипсум блять Лорен ипсум блять Лорен ипсум блять Лорен ипсум блять Лорен ипсум блять ',
                    data: 'Завтра',
                    hTime: 11,
                    mTime: 12,
                },
                {
                    title: 'lkjasfhdkdjhaf asklfjjadkshf adfksjghjdkfhg',
                    data: 'Сегодня',
                    hTime: 11,
                    mTime: 12,
                },
                {
                    title: 'lkjasfhdkdjhaf asklfjjadkshf adfksjghjdkfhg',
                    data: 'Сегодня',
                    hTime: 11,
                    mTime: 12,
                },
                {
                    title: 'lkjasfhdkdjhaf asklfjjadkshf adfksjghjdkfhg',
                    data: 'Сегодня',
                    hTime: 11,
                    mTime: 12,
                },
                {
                    title: 'lkjasfhdkdjhaf asklfjjadkshf adfksjghjdkfhg',
                    data: 'Сегодня',
                    hTime: 11,
                    mTime: 12,
                },
            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>

                <Header searchBar rounded
                    style={CONST.header}>
                    <Item style={{flex: 5}}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                    <Right style={{flex: 1}}>
                        <Button transparent>
                            <Icon name='menu' onPress={ () => this.props.navigation.navigate('Settings')} />
                        </Button>
                    </Right>
                </Header>

                <List dataArray={this.state.list}
                      showsVerticalScrollIndicator={false}
                      renderRow={(item) =>
                          <TaskComponent
                              onPress={() => console.log("sdfdsf")}
                              title={item.title}
                              data={item.data}
                              hTime={item.hTime}
                              mTime={item.mTime}/>
                      }/>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ToDoList')}
                    style={styles.fab}>
                    <Icon type={"Entypo"} name={"plus"} style={{color: CONST.colors.white}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CONST.colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        height: height(8.5),
        aspectRatio: 1,
        backgroundColor: '#eb6c68',
        position: 'absolute',
        bottom: height(2),
        right: width(3),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: height(8) / 2
    }
});

