import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    isDiet: boolean
}

export const Container = styled(View)`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled(Text) <Props>`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`;

export const SubTitle = styled(Text)`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Image = styled.Image`
    width: 250px;
    height: 250px;
    margin: 60px;
`;