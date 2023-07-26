import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '../storageConfig';
import { getAllMeals } from './MealGetAll';

export interface Meal {
	name: string;
	description: string;
	date: Date;
	is_diet: boolean;
}

export async function createMeal(newMeal: Meal): Promise<void> {
    try {
        const storedMeals = await getAllMeals();

        const storage = JSON.stringify([...storedMeals, newMeal]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}