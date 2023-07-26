import { useNavigation } from '@react-navigation/native';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Alert, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Button } from '../../components/Button';
import DateField from '../../components/DateField';
import TimeField from '../../components/TimeField';
import { createMeal } from '../../storage/meal/MealCreate';
import { AppError } from '../../utils/AppError';
import {
    Body,
    Container,
    ContentInput,
    DietOption,
    GoBackIcon,
    Header,
    IconContent,
    Input,
    LabelInput,
    SmallCardContent,
    Status,
    Title,
} from './styles';

export default function Meal() {
	const [name, setName] = useState<string>('');
	const [date, setDate] = useState<Date>(new Date());
	const [isDiet, setIsDiet] = useState<boolean | null>(null);
	const [description, setDescription] = useState<string>('');

	const navigation = useNavigation();

	function toHome(): void {
		navigation.navigate('home');
	}

	async function register(): Promise<void> {
		if (!name) {
			return Alert.alert('Nova Refeição', 'Informe um nome.');
		}

		if (!description) {
			return Alert.alert('Nova Refeição', 'Informe uma descrição.');
		}

		if (isDiet === null) {
			return Alert.alert('Nova Refeição', 'Informe se a refeição está dentro da dieta.');
		}

		try {
            await createMeal({
				name: name,
				description: description,
				date: date,
				is_diet: isDiet,
			});

            navigation.navigate('feedback', {isDiet});
        } catch (error) {
            if (error instanceof AppError) {
                return Alert.alert('Nova Refeição', error.message);
            }

            Alert.alert('Novo Refeição', 'Não foi possível cadastrar a refeição');
        }
	}

	function handlePressOutside(): void {
		Keyboard.dismiss();
	};

	function handleDateChange(selectedDate: Date): void {
		setDate(selectedDate);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePressOutside}>
			<Container>
				<Header>
					<IconContent onPress={toHome}>
						<GoBackIcon />
					</IconContent>

					<Title>Nova Refeição</Title>
				</Header>

				<Body>
					<LabelInput>Nome</LabelInput>
					<Input value={name} onChangeText={(text) => setName(text)} />

					<LabelInput>Descrição</LabelInput>
					<Input
						style={{ textAlignVertical: 'top' }} multiline={true}
						numberOfLines={6}
						value={description}
						onChangeText={(text) => setDescription(text)} />

					<SmallCardContent>
						<ContentInput style={{ marginRight: 10 }}>
							<LabelInput>Data</LabelInput>

							<DateField onDateChange={handleDateChange} defaultValue={date} />
						</ContentInput>

						<ContentInput style={{ marginRight: 10 }}>
							<LabelInput>Hora</LabelInput>

							<TimeField onTimeChange={handleDateChange} defaultValue={date} />
						</ContentInput>
					</SmallCardContent>


					<LabelInput>Está dentro da dieta?</LabelInput>

					<SmallCardContent>
						<DietOption type='SUCCESS' selected={isDiet === true} onPress={() => setIsDiet(true)} >
							<Status type='SUCCESS' />

							<Text>Sim</Text>
						</DietOption>

						<DietOption type='ERROR' selected={isDiet === false} onPress={() => setIsDiet(false)} >
							<Status type='ERROR' />

							<Text>Não</Text>
						</DietOption>
					</SmallCardContent>

					<View style={{ flex: 1 }} />
					<Button showIcon={false} onPress={register} title='Cadastrar refeição' />
				</Body>
			</Container>
		</TouchableWithoutFeedback>
	);
}