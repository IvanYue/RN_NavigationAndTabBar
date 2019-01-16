import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
}from 'react-navigation'
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";


const  InitNavigator = createStackNavigator({
    WelcomePage: {
        screen:WelcomePage,
        navigationOptions:{
            //可以通过将header设置为null，来禁用Stacknavigator的navigation Bar
            header:null,
        }
    }
});

const  MainNavigator = createStackNavigator({

    HomePage: {
        screen:HomePage,
        navigationOptions:{
            //可以通过将header设置为null，来禁用Stacknavigator的navigation Bar
            // header:null,
            title:'HomePage',
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            // header:null,
            title:'DetailPage',
        }
    }
},{

});

/**
 * 连接两个导航器  用 SwitchNavigator 关联
 *  当页面从欢迎页面跳转到首页的时候，为了不让其能返回欢迎页
 *  所以 InitNavigator 和  MainNavigator 分属两个导航器
 */
export default createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,

},{
    navigationOptions:{
        header:null,
    }
});