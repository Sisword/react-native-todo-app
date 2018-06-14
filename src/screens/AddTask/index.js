import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TaskComponent} from '../../components/index'
import CONST from "../../styles/CONST";
import {Fab, Icon, List, ListItem} from 'native-base'
import { width, height, totalSize } from 'react-native-dimension'

export default class AddTask extends React.Component {
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

                <Fab
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#a7314b'}}
                    position="bottomRight"
                    onPress={() => console.log('Fab')}>
                    <Icon type={"Entypo"} name={"plus"}/>
                </Fab>
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
        paddingVertical: height(2)
    },
});

