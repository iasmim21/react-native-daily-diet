import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
    padding: 12px;

    border-radius: 5px;
    border: solid 1px;
    border-color:  ${({ theme }) => theme.COLORS.GRAY_300};
`;