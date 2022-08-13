import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

interface PerkIconProps {
	backgroundColor: keyof typeof defaultTheme;
}

export const Container = styled.div<PerkIconProps>`
	width: 2rem;
	height: 2rem;

	padding: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;

	background: ${props => props.theme[props.backgroundColor]};

	svg {
		color: white;
	}
`;
