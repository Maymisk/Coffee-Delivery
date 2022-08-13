import styled from 'styled-components';

export const PaymentInfoContainer = styled.div`
	padding: 2.5rem;

	background: ${props => props.theme.card};

	margin-top: 0.75rem;

	border-radius: 6px;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const PaymentMethodsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.75rem;

	margin-top: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
	}
`;

interface IPaymentMethodButton {
	isSelected: boolean;
}

export const PaymentMethodButton = styled.button<IPaymentMethodButton>`
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.75rem;
	flex: 1;

	padding: 1rem;

	text-transform: uppercase;

	border-radius: 6px;

	grid-column: span 1;

	background: ${props => props.theme.button};
	color: ${props => props.theme.text};

	font-size: 0.75rem;
	font-family: 'Roboto', sans-serif;

	svg {
		color: ${props => props.theme['purple-500']};
	}

	&:hover {
		background: ${props => props.theme['purple-100']};
	}

	${props =>
		props.isSelected && `border: 1px solid ${props.theme['purple-500']}`};

	@media (max-width: 768px) {
		width: 75%;
		padding: 0.75rem;
	}
`;
