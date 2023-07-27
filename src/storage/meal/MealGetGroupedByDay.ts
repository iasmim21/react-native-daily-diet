import { Meal } from './MealCreate';
import { getAllMeals } from './MealGetAll';

export interface MealItem {
	hour: string,
	name: string,
	is_diet: boolean
}

export interface MealGroup {
	day: string;
	data: Array<MealItem>
}

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

function groupeMealsByDay(storedMeals: Array<Meal>): any {
    return storedMeals.reduce((acc: any, meal: Meal) => {
        const dateString = formatDate(meal.date);

        if (!acc[dateString]) {
            acc[dateString] = [];
        }

        acc[dateString].push(meal);

        return acc;
    }, {});
}

function formatMeals(groupedMealsByDay: any): Array<MealGroup> {
    return Object.keys(groupedMealsByDay).map((dateString: string) => {
        const mealsForDate = groupedMealsByDay[dateString];

        const formattedMeals: Array<MealItem> = mealsForDate.map((meal: Meal) => ({
            hour: meal.date.toISOString().split('T')[1].slice(0, 5),
            name: meal.name,
            is_diet: meal.is_diet
        }));

        formattedMeals.sort((a: MealItem, b: MealItem) => (a.hour > b.hour ? -1 : 1));

        const mealGroup: MealGroup = {
            day: dateString,
            data: formattedMeals
        };

        return mealGroup;
    });
}

export async function getMealsGroupedByDay(): Promise<MealGroup[]> {
    try {
        const storedMeals = await getAllMeals();

        const groupedMealsByDay = groupeMealsByDay(storedMeals);

        const formattedGroupedMealsByDay = formatMeals(groupedMealsByDay);

        formattedGroupedMealsByDay.forEach((item: any) => {
            item.data.sort((a: any, b: any) => (a.hour > b.hour ? -1 : 1));
        });

        return formattedGroupedMealsByDay;
    } catch (error) {
        throw error;
    }
}