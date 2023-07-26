import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

interface DateFieldProps {
	onDateChange: (date: Date) => void;
	defaultValue?: Date;
}

export default function DateField({ onDateChange, defaultValue }: DateFieldProps) {
	const [selectedDate, setSelectedDate] = useState(defaultValue || new Date());
	const [showPicker, setShowPicker] = useState(false);

	const handleDateChange = (event: any, date?: Date) => {
		if (date !== undefined) {
			setSelectedDate(date);

			onDateChange(date);
		}

		setShowPicker(false);
	};

	useEffect(() => {
		setSelectedDate(defaultValue || new Date());
	}, [defaultValue]);

	return (
		<Container>
			<TouchableOpacity onPress={() => setShowPicker(true)}>
				<Text>
					{
						selectedDate
							? selectedDate.toLocaleDateString('pt-BR')
							: 'Clique para selecionar uma data'
					}
				</Text>
			</TouchableOpacity>

			{showPicker && (
				<DateTimePicker
					value={selectedDate}
					mode="date"
					display="default"
					onChange={handleDateChange}
				/>
			)}
		</Container>
	);
}