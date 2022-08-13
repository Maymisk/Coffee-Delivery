import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	background: transparent;

	padding-bottom: 1.5rem;

	border-bottom: 1px solid ${props => props.theme.button};

	img {
		width: 4rem;
		height: 4rem;
	}

	& + & {
		margin-top: 1.5rem;
	}
`;

export const CoffeeInfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;

	> div {
		> h3 {
			font-family: 'Roboto', sans-serif;
			font-weight: 400;

			color: ${props => props.theme.title};

			@media (max-width: 768px) {
				font-size: 1rem;
			}
		}
	}
`;

export const ButtonsContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;

	margin-top: 0.5rem;
`;

export const RemoveItemButtonContainer = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	text-transform: uppercase;

	padding: 0.5rem;

	border-radius: 6px;

	background: ${props => props.theme.button};
	color: ${props => props.theme.text};

	font-family: 'Roboto', sans-serif;
	font-size: 0.75rem;

	line-height: 160%;

	svg {
		color: ${props => props.theme['purple-500']};
	}
`;

export const PriceContainer = styled.div`
	text-align: right;

	font-family: 'Roboto', sans-serif;
	font-weight: 700;

	color: ${props => props.theme.text};
`;
