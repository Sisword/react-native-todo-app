import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TaskComponent} from '../../components/index'
import CONST from "../../styles/CONST";
import {Fab, List, Item, Header, Left, Input, Right, Button, Icon, Title} from 'native-base'
import {width, height, totalSize} from 'react-native-dimension'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskAction from '../../redux/actions/taskActions'

class TodoListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _deleteTask = (id) => {
        this.props.taskAction.deleteTask(id);
        console.log ('================================', this.props.task)
    };

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
                      renderRow={(item, sectionID, rowID) =>
                          <TaskComponent
                              onPress={ () => this._deleteTask(rowID) }
                              title={item.title}
                              data={item.data}
                              hTime={item.hTime}
                              mTime={item.mTime}/>
                      }/>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AddTask')}
                    style={styles.fab}>
                    <Icon type={"Entypo"} name={"plus"} style={{color: CONST.colors.white}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    task: JSON.parse(JSON.stringify(state.task)),
});

const mapDispatchToProps = dispatch => ({
    taskAction: bindActionCreators(taskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen)

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
