/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class PopularPage extends Component<Props> {

    constructor(props){
        super(props);
        this.tabNames=['Java','Android','iOS','React','React Native','PHP'];
    }
    /**
     *  动态生成tabs
     */
    _genTabs(){
        const  tabs ={};
        // 遍历 tabNames
        this.tabNames.forEach((item,index)=>{
            tabs[`tab${index}`]={
                //传递参数
                screen:props => <PopularTab{...props} tabLabel={item}/>,
                // screen:PopularTab
                navigationOptions:{
                    title:item
                }
            }
        });
        return tabs;
    }
    render() {
        const PopularTopNav = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),{
                //tabBar样式
                tabBarOptions:{
                    tabStyle:styles.tabStyle,
                    upperCaseLabel:false, //标签是否大写 默认true
                    scrollEnabled:true,//选项卡是否可以滚动 默认 false
                    style:{
                        backgroundColor: '#678',//背景色
                    },
                    indicatorStyle:styles.indicatorStyle,//标签指示器的样式
                    labelStyle:styles.labelStyle,//字体样式
                }
            }
        ));
        return <View style={{flex:1,marginTop: 0}}>
            <PopularTopNav/>
        </View>;

    }
}



class PopularTab extends Component<Props>{

    render() {

        const {tabLabel,navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>

                <Button title={'跳转到详情页'} style={styles.welcome} onPress={()=>{
                    NavigationUtil.goPage({
                        navigation:navigation,
                    },'DetailPage')
                }}/>

                <Text>

                </Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'white'
    },
    labelStyle:{
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
});
