import { Plus } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css, ThemeProps } from 'styled-components/native';

export type ButtonTypeStyleProps = 'light' | 'dark';

interface ButtonTypeStyle {
	type?: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <ButtonTypeStyle>`
    flex: 1;

    flex-direction: row;

    min-height: 50px;
    max-height: 50px;

    border-radius: 6px;

    margin-top: 10px;
    margin-bottom: 30px;

    padding-left: 20px;
    padding-right: 20px;

    justify-content: center;
    align-items: center;

    ${({ theme, type }) => css`
        background-color: ${type === 'dark' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
        color: ${type === 'light' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
    `};
`;

export const Title = styled.Text<ButtonTypeStyle>`
	${({ theme, type }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
    	color: ${type === 'light' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
    `};
`;

export const AddIcon = styled(Plus).attrs(({ theme, type }: ButtonTypeStyle & ThemeProps<any>) => ({
	color: type === 'light' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE,
	size: 16,
})) <ButtonTypeStyle>`
    margin-right: 5px;
`;