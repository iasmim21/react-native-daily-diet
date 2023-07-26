import { Text, View } from 'react-native';
import styled from 'styled-components/native';

interface StatusProps {
    type: 'SUCCESS' | 'ERROR';
}

export const ContentCards = styled(View)`
    padding: 24px
`;

export const Title = styled(Text)`
    text-align: center;
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Card = styled(View)`
    width: 100%;
    padding: 20px;
    display: flex;
    margin-top: 10px;
    border-radius: 5px;

    align-items: center;
    flex-direction: column;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const SmallCard = styled(View)<StatusProps>`
    width: 49%;
    display: flex;
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;

    align-items: center;
    flex-direction: column;
    justify-content: center;

    background-color: ${({ type, theme }) => type === 'SUCCESS' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;

export const SmallCardContent = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const PencentNumber = styled.Text`
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PencentSubTitle = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;