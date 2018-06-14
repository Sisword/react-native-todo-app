import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TaskComponent} from '../../components/index'
import CONST from "../../styles/CONST";
import {Fab, List, Item, Header, Left, Input, Right, Button, Icon, Title} from 'native-base'
import {width, height, totalSize} from 'react-native-dimension'
import { Text } from 'react-native'
import { connect } from 'react-redux'


class TodoListScreen extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)
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

                <List dataArray={this.props.task}
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

function mapStateToProps(state){
    return {
        task: state.task
    }
}

export default connect(mapStateToProps)(TodoListScreen)

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
