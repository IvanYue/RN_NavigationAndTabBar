/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import FavoritePage from "./FavoritePage";
import MyPage from "./MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";


type Props = {};
export default class HomePage extends Component<Props> {

    // _tabNavigator(){
    //     //返回tabbar
    //     return createAppContainer(
    //         createBottomTabNavigator({
    //             PopularPage: {
    //                 screen: PopularPage,
    //                 navigationOptions:{
    //                     tabBarLabel:'最热',
    //                     tabBarIcon:({tintColor,focused})=>(
    //                         // focused 是否被选中
    //                         <MaterialIcons
    //                             name={'whatshot'}
    //                             color={tintColor}
    //                             size={26}
    //                         />
    //                     )
    //                 }
    //             },
    //             TrendingPage: {
    //                 screen: TrendingPage,
    //                 navigationOptions: {
    //                     tabBarLabel: '趋势',
    //                     tabBarIcon:({tintColor,focused})=>(
    //                         <MaterialIcons
    //                             name={'trending-up'}
    //                             color={tintColor}
    //                             size={26}
    //                         />
    //                     )
    //                 }
    //             },
    //             FavoritePage: {
    //                 screen: FavoritePage,
    //                 navigationOptions:{
    //                     tabBarLabel:'收藏',
    //                     tabBarIcon:({tintColor,focused})=>(
    //                         <MaterialIcons
    //                             name={'favorite'}
    //                             color={tintColor}
    //                             size={26}
    //                         />
    //                     )
    //                 }
    //             },
    //             MyPage: {
    //                 screen: MyPage,
    //             navigationOptions:{
    //                 tabBarLabel:'我的',
    //                 tabBarIcon:({tintColor,focused})=>(
    //                     <Entypo
    //                         name={'user'}
    //                         color={tintColor}
    //                         size={26}
    //                     />
    //                 )
    //             }
    //             }
    //         })
    //     );
    // }

    render() {
        /**
         * 导航器多层嵌套，导致拿不到想要的导航器。
         * @param 比如 DetailPage 是在 MainNavigator 里面配置的,
         *        HomePage 也是在 MainNavigator 里面。
         *        PopularPage 是在 HomePage 里面配置的，
         *        所以 PopularPage 和 DetailPage 不属于同一导航器
         *        导致不能拿到 DetailPage 的 MainNavigator 导航器。
         *        所以先要取得想要跳转页面的 nativigator
         *        因此需要在这里配置保存一下 DetailPage 的导航器。
         */
        NavigationUtil.navigation = this.props.navigation;

        // const Tab = this._tabNavigator();
        // return <Tab/>

        /**
         * 动态配置
         */
        return <DynamicTabNavigator/>
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
});
