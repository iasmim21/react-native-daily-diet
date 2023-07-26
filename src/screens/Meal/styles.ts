import { ArrowLeft } from 'phosphor-react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

interface StatusProps {
    type: 'SUCCESS' | 'ERROR'
}

interface DietProps {
    selected: boolean,
    type: 'SUCCESS' | 'ERROR'
}

export const Container = styled(View)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Header = styled(View)`
    display: flex;
    width: 100%;
    padding: 25px;
    margin-top: 30px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Title = styled(Text)`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Body = styled(View)`
    flex: 1;
    padding: 20px;
    padding-bottom: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const IconContent = styled(TouchableOpacity)`
    margin-top: 25px;
    margin-left: 20px;
    position: absolute;
`;

export const LabelInput = styled(Text)`
    margin-top: 20px;
    margin-bottom: 5px;

    border-color:  ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Input = styled(TextInput)`
    padding: 8px;
    border: solid 1px;
    border-radius: 5px;
    border-color:  ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ContentInput = styled(View)`
    width: 49%;
    flex-direction: column;
    justify-content: center;
`;

export const DietOption = styled(TouchableOpacity) <DietProps>`
    width: 49%;
    padding: 20px;
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ selected, theme, type }) =>
        selected ? (type === 'SUCCESS' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200) : theme.COLORS.GRAY_200};
`;

export const GoBackIcon = styled(ArrowLeft).attrs(() => ({
    size: 24
}))``;

export const SmallCardContent = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
`;

export const Status = styled.View<StatusProps>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 10px;

  background-color: ${({ type, theme }) =>
        type === 'SUCCESS' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`;