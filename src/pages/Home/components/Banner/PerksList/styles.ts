import styled from 'styled-components';
import { defaultTheme } from '../../../../../styles/themes/default';

export const PerksContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 231px);
	gap: 1.25rem;

	margin-top: 4rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const Perk = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	color: ${props => props.theme.text};

	font-family: 'Roboto', sans-serif;
`;
