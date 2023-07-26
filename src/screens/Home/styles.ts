import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface StatusProps {
    type: 'SUCCESS' | 'ERROR';
  }

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: space-between;
`;

export const LogoUser = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 45px;
`;

export const TextRegular = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const SectionHeader = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Status = styled.View<StatusProps>`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${({ type, theme }) =>  type === 'SUCCESS' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
`;

export const LogoImage = styled.Image`
    width: 45px;
    height: 40px;
    margin-right: 2px;
`;

export const LogoContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const MealCard = styled(TouchableOpacity)`
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 6px;

    flex-direction: row;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;