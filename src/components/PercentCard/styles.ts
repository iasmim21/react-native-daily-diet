import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type IconTypeProps = 'expand' | 'back';

export const Container = styled(TouchableOpacity)`
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 5px;

    margin-top: 30px;
    margin-bottom: 50px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
`;

export const ExpandIcon = styled(ArrowUpRight).attrs(({ theme}) => ({
    color: theme.COLORS.GREEN_300,
    size: 32
}))`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const GoBackIcon = styled(ArrowLeft).attrs(({ theme}) => ({
    color: theme.COLORS.GREEN_300,
    size: 32
}))``;

export const Percent = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PencentNumber = styled.Text`
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PencentSubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;