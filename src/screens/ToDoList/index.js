import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, ListView} from 'react-native';
import CONST from "../../styles/CONST";
import {List, Item, Header, Left, Input, Right, Button, Icon, ListItem} from 'native-base'
import {width, height, totalSize} from 'react-native-dimension'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as taskAction from '../../redux/actions/taskActions'

class TodoListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    deleteRow(secId, rowId, rowMap) {

        rowMap[`${secId}${rowId}`].props.closeRow();
        this.props.taskAction.deleteTask(rowId);
        this.setState({list: this.props.task});
    }

    render() {

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <View style={styles.container}>

                <Header searchBar rounded
                        style={CONST.header}>
                    <Item style={{flex: 5}}>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                    <Right style={{flex: 1}}>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.navigate('Settings')}/>
                        </Button>
                    </Right>
                </Header>

                <List style={{ marginVertical: height(2)}}
                      closeOnRowBeginSwipe={true}
                      showsVerticalScrollIndicator={false}
                      disableRightSwipe
                      dataSource={this.ds.cloneWithRows(this.props.task)}
                      renderRow={data =>
                          <ListItem
                              itemDivider={false}
                              style={{width: width(90), backgroundColor: 'transparent', borderBottomWidth: 0}}>
                              <View style={{width: width(90), backgroundColor: CONST.colors.white, paddingHorizontal: width(2)}}>
                                  <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
                                  <Text numberOfLines={1}
                                        style={styles.time}>{`${data.data} в ${data.hTime}:${data.mTime}`}</Text>
                              </View>
                          </ListItem>
                      }
                      renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                              <Icon active name="trash"/>
                          </Button>}
                      leftOpenValue={75}
                      rightOpenValue={-75}
                />

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
    },
    title: {
        fontSize: totalSize(2.5),
        color: CONST.colors.black,
        width: '90%'
    },
    time: {
        fontSize: totalSize(2),
        color: CONST.colors.grey
    },
});
