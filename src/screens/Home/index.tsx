import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { SectionList, Text } from 'react-native';

import dailyDiet from '../../../assets/dailyDiet.png';
import logoIcons from '../../../assets/logoIcons.png';
import user from '../../../assets/user.png';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { PercentCard } from '../../components/PercentCard';
import { getMealsGroupedByDay } from '../../storage/meal/MealGetGroupedByDay';
import {
    Container,
    Header,
    LogoContainer,
    LogoImage,
    LogoUser,
    MealCard,
    SectionHeader,
    Status,
    TextRegular,
} from './styles';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any[]>([]);

	const navigation = useNavigation();

	function viewStatistics(): void {
		navigation.navigate('statistics');
	}

	function newMeal(): void {
		navigation.navigate('meal');
	}

	function renderItem(item: any, index: number, section: any): JSX.Element {
		const isLastItemInSection = index === section.data.length - 1;

		return (
			<MealCard style={isLastItemInSection ? { marginBottom: 30 } : null}>
				<Text>{item.hour} | {item.name}</Text>

				<Status type={item.is_diet ? 'SUCCESS' : 'ERROR'} />
			</MealCard>
		);
	}

	function renderSection(title: string): JSX.Element {
		return (
			<SectionHeader>{title}</SectionHeader>
		);
	}

	async function initComponent(): Promise<void> {
		setIsLoading(true);
		// AsyncStorage.setItem(MEAL_COLLECTION, '');

		const mealsGroupedByDayData = await getMealsGroupedByDay();

		setData(mealsGroupedByDayData);

		setIsLoading(false);
	}

	useFocusEffect(useCallback(() => {
		initComponent();
	}, []));

	return (
		<Container>
			<Header>
				<LogoContainer>
					<LogoImage source={logoIcons} />
					<LogoImage source={dailyDiet} />
				</LogoContainer>

				<LogoUser source={user} />
			</Header>

			<PercentCard onPress={viewStatistics} />

			<TextRegular>Refeições</TextRegular>

			<Button title='Nova Refeição' onPress={newMeal} />

			{isLoading
				? <Loading />
				: <SectionList
					sections={data}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => item + index}
					renderSectionHeader={({ section: { day } }) => renderSection(day)}
					renderItem={({ item, index, section }) => renderItem(item, index, section)}
					contentContainerStyle={[{ paddingBottom: 20 }, data.length === 0 && { flex: 1 }]}
				/>
			}
		</Container>
	);
}