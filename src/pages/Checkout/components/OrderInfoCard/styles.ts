import styled from 'styled-components';

export const Container = styled.div`
	padding: 2.5rem;

	border-radius: 6px 44px;

	background: ${props => props.theme.card};

	justify-self: center;
`;

export const OrderButton = styled.button`
	width: 100%;
	height: 2.875rem;

	text-align: center;
	text-transform: uppercase;

	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;
	font-weight: 700;

	color: ${props => props.theme.white};
	background: ${props => props.theme['yellow-500']};

	padding: 0.75rem 0.5rem;

	border-radius: 6px;

	margin-top: 1.5rem;

	transition: background-color 0.2s;

	&:hover {
		background: ${props => props.theme['yellow-700']};
	}
`;
