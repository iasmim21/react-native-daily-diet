import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '../storageConfig';
import { Meal } from './MealCreate';

export async function getAllMeals() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        const meals: Meal[] = storage ? JSON.parse(storage) : [];

        meals.forEach((meal) => meal.date = new Date(meal.date));

        return meals;
    } catch (error) {
        throw error;
    }
}