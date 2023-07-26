import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Meal from '../screens/Meal';
import MealFeedback from '../screens/MealFeedback';
import Statistics from '../screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
            <Screen name="home" component={Home} />
            <Screen name="statistics" component={Statistics} />
            <Screen name="meal" component={Meal} />
            <Screen name="feedback" component={MealFeedback} />
        </Navigator>
    );
}