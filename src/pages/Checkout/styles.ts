import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

export const Container = styled.main`
	display: flex;
	align-items: flex-start;
	gap: 2rem;

	margin-top: 2.5rem;

	@media (max-width: 768px) {
		flex-direction: column;

		margin-top: 1rem;
	}
`;

// referencing other styled components seems to cause troubles
export const MainCards = styled.div`
	max-width: 40rem;

	h1 {
		font-size: 1.125rem;

		margin-bottom: 1rem;
	}
`;

export const AsideCard = styled.div`
	flex: 1;

	> h1 {
		font-size: 1.125rem;

		margin-bottom: 1rem;
	}
`;

interface IDescriptionContainerProps {
	iconColor: keyof typeof defaultTheme;
}

export const DescriptionContainer = styled.header<IDescriptionContainerProps>`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;

	line-height: 130%;

	div {
		font-family: 'Roboto', sans-serif;

		h1 {
			font-size: 1rem;
			color: ${props => props.theme.subtitle};
			margin: 2px;
		}

		p {
			font-size: 0.875rem;

			color: ${props => props.theme.text};
		}
	}

	svg {
		color: ${props => props.theme[props.iconColor]};
	}
`;
