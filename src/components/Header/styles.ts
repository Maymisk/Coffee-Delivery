import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: fixed;
	top: 0;
	left: 0;

	background: ${props => props.theme.background};

	padding: 2rem 10rem;

	> a {
		display: flex;
		align-items: center;
	}

	@media (max-width: 768px) {
		padding: 2rem 1rem;
	}
`;

export const Info = styled.div`
	height: 2.375rem;

	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

const BaseInfoContainer = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0.5rem;

	border-radius: 6px;
`;

export const LocationContainer = styled(BaseInfoContainer)`
	gap: 0.25rem;

	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;

	background: ${props => props.theme['purple-100']};
	color: ${props => props.theme['purple-700']};

	svg {
		color: ${props => props.theme['purple-500']};
	}
`;

export const CheckoutButton = styled(BaseInfoContainer)`
	background: ${props => props.theme['yellow-100']};

	a {
		width: 100%;
		height: 100%;

		position: relative;

		svg {
			color: ${props => props.theme['yellow-700']};
		}
	}

	transition: opacity 0.2s;

	&:hover {
		opacity: 0.8;
	}
`;
