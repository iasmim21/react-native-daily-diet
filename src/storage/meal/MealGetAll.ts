import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '../storageConfig';

export async function getAllMeals() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        const meals: string[] = storage ? JSON.parse(storage) : [];//Ver interface Meal

        return meals;
    } catch (error) {
        throw error;
    }
}