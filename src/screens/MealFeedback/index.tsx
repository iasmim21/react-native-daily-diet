import { useNavigation, useRoute } from '@react-navigation/native';

import error from '../../../assets/error.png';
import success from '../../../assets/success.png';
import { Button } from '../../components/Button';
import { Container, Image, SubTitle, Title } from './styles';

type RouteParams = {
    isDiet: boolean
}

export default function MealFeedback() {
    const route = useRoute();
    const navigation = useNavigation();

    const { isDiet } = route.params as RouteParams;

    return (
        <Container>
            <Title isDiet={isDiet}>
                {isDiet ? 'Continue assim!' : 'Que pena!'}
            </Title>

            <SubTitle>
                {isDiet
                    ? 'Você continua dentro da dieta. Muito bem!'
                    : 'Você saiu da dieta dessa vez. Mas continue se esforçando e não desista!'
                }
            </SubTitle>

            <Image source={isDiet ? success : error} />

            <Button
                showIcon={false}
                title='Ir para a página inicial'
                onPress={() => navigation.navigate('home')}
            />
        </Container>
    );
}