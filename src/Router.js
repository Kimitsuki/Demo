import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import MainPage from './component/MainPage';
import JobList from './component/JobList';

export const Router = createAppContainer(createStackNavigator({
    MainPage: {
        screen: MainPage
    },
    JobList: {
        screen: JobList
    }
}, {headerMode: 'none'}))
