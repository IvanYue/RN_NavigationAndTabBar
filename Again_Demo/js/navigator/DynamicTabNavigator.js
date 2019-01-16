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

import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import NavigationUtil from "../navigator/NavigationUtil";
import {BottomTabBar} from 'react-navigation-tabs'


type Props = {};

/**
 * 在这里配置页面的路由
 */

const  TABS  = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor,focused})=>(
                // focused 是否被选中
                <MaterialIcons
                    name={'whatshot'}
                    color={tintColor}
                    size={26}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'trending-up'}
                    color={tintColor}
                    size={26}
                />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'favorite'}
                    color={tintColor}
                    size={26}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <Entypo
                    name={'user'}
                    color={tintColor}
                    size={26}
                />
            )
        }
    }
}
export default class DynamicTabNavigator extends Component<Props> {

    constructor(props){
        super(props);
        // 禁止 警告 弹框
        console.disableYellowBox = true;
    }

    _tabNavigator(){
        //取出页面
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
        //根据需要要定制显示的tab
        const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage};

        // 动态配置Tab属性标题
        PopularPage.navigationOptions.tabBarLabel = '最热';

        //返回tabbar
        return createAppContainer(
            createBottomTabNavigator(tabs,{
            /**
             *  修改底部Tabbar颜色
             *  tabBarComponent 是 React 组件
             */
            tabBarComponent:TabBarComponent
            })
        );
    }

    render() {
        /**
         * 导航器多层嵌套，导致拿不到想要的导航器。
         * @param 比如 DetailPage 是在 MainNavigator 里面配置的,
         *        HomePage 也是在 MainNavigator 里面。
         *        PopularPage 是在 HomePage 里面配置的，所以不属于同一导航器
         *        导致不能拿到 DetailPage 的 MainNavigator 导航器。
         *        所以先要取得想要跳转页面的 nativigator
         *        因此需要在这里配置保存一下 DetailPage 的导航器。
         */
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

/**
 * 自定义tabBarComponent
 * 继承 React.Component
 */
class  TabBarComponent extends  React.Component{

        constructor(props){
            super(props);
            this.theme ={
                //颜色
                tintColor: props.activeTintColor,
                /**
                 * props 经常会变，所以需要一个标志位
                 * 所以就取系统的时间
                 */

                updateTime:new Date().getTime(),
            }
        }
        render() {

            const {routes,index} = this.props.navigation.state;
            if (routes[index].params){
                const {theme} = routes[index].params;
                // 以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
                if (theme && theme.updateTime > this.theme.updateTime){
                    this.theme = theme;
                }
            }
            return <BottomTabBar
                {...this.props}
                activeTintColor =
                    {this.theme.tintColor||this.props.activeTintColor}
            />;
        }
}