import styled from 'styled-components';

export const Card = styled.div`
	max-width: 256px;

	background: ${props => props.theme.card};

	border-radius: 6px 36px;

	padding: 1.25rem;

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin-top: calc(0px - 1.5rem - 1.25rem);
	}

	h1 {
		font-size: 1.25rem;
		font-weight: 700;

		text-align: center;

		color: ${props => props.theme.subtitle};
	}

	p {
		font-size: 0.875rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;

		color: ${props => props.theme.label};

		text-align: center;

		margin-top: 0.5rem;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 2rem;
	}
`;

export const ButtonsContainer = styled.div`
	height: 2.375rem;

	display: flex;
	gap: 0.5rem;
`;

export const PriceContainer = styled.div`
	font-weight: 800;
	font-size: 1.5rem;

	color: ${props => props.theme.text};

	span {
		font-size: 0.875rem;
		font-weight: 400;

		font-family: 'Roboto', sans-serif;
	}
`;

export const ShoppingCartButton = styled.button`
	border-radius: 6px;

	padding: 0.5rem;

	background: ${props => props.theme['purple-700']};

	transition: background-color 0.2s;

	&:hover {
		background: ${props => props.theme['purple-500']};
	}
`;
