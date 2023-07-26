import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { PercentCard } from '../../components/PercentCard';
import { Card, ContentCards, PencentNumber, PencentSubTitle, SmallCard, SmallCardContent, Title } from './styles';


export default function Statistics() {
	const navigation = useNavigation();

	function handleGoBack(): void {
		navigation.navigate('home');
	}

	return (
		<View>
			<PercentCard iconType='back' onPress={handleGoBack}/>

			<ContentCards>
				<Title>Estatisticas Gerais</Title>

				<Card>
					<PencentNumber>22</PencentNumber>
					<PencentSubTitle>melhor sequencia de pratos dentro da dieta</PencentSubTitle>
				</Card>

				<Card>
					<PencentNumber>105</PencentNumber>
					<PencentSubTitle>refeições registradas</PencentSubTitle>
				</Card>

				<SmallCardContent>
					<SmallCard type="SUCCESS">
						<PencentNumber>22</PencentNumber>
						<PencentSubTitle>refeições dentro da dieta</PencentSubTitle>
					</SmallCard>

					<SmallCard type="ERROR">
						<PencentNumber>105</PencentNumber>
						<PencentSubTitle>refeições fora da dieta</PencentSubTitle>
					</SmallCard>
				</SmallCardContent>
			</ContentCards>
		</View>
	);
}