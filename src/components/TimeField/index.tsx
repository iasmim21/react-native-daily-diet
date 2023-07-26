import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

interface TimeFieldProps {
	onTimeChange: (time: Date) => void;
	defaultValue?: Date;
}

export default function TimeField({ onTimeChange, defaultValue }: TimeFieldProps) {
	const [selectedTime, setSelectedTime] = useState(defaultValue || new Date());
	const [showPicker, setShowPicker] = useState(false);

	const handleTimeChange = (event: any, time?: Date) => {
		if (time !== undefined) {
			setSelectedTime(time);

			onTimeChange(time);
		}

		setShowPicker(false);
	};

	useEffect(() => {
		setSelectedTime(defaultValue || new Date());
	}, [defaultValue]);

	return (
		<Container>
			<TouchableOpacity onPress={() => setShowPicker(true)}>
				<Text>
					{
						selectedTime
							? selectedTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
							: 'Clique para selecionar uma hora'
					}
				</Text>
			</TouchableOpacity>

			{showPicker && (
				<DateTimePicker
					value={selectedTime}
					mode="time"
					display="default"
					onChange={handleTimeChange}
				/>
			)}
		</Container>
	);
}