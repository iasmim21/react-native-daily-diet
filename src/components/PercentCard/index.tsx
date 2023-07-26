import { TouchableOpacityProps } from 'react-native';

import { Container, ExpandIcon, GoBackIcon, IconTypeProps, PencentNumber, PencentSubTitle, Percent } from './styles';

type Props = TouchableOpacityProps & {
    iconType?: IconTypeProps
}

export function PercentCard({ iconType = 'expand', ...rest }: Props) {
    return (
        <Container  {...rest}>
            {iconType == 'expand' ? <ExpandIcon /> : <GoBackIcon />}

            <Percent>
                <PencentNumber>90,84%</PencentNumber>
                <PencentSubTitle>das refeições dentro da dieta</PencentSubTitle>
            </Percent>
        </Container>
    )
}