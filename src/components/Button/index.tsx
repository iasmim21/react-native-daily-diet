import { TouchableOpacityProps } from 'react-native';

import { AddIcon, ButtonTypeStyleProps, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonTypeStyleProps,
    showIcon?: boolean
}

export function Button({ title, type = 'dark', showIcon = true, ...rest}: Props) {
    return (
        <Container type={type} {...rest}>
            {showIcon && <AddIcon type={type} />}

            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}