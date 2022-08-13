import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;

	margin-top: 2.5rem;

	@media (max-width: 768px) {
		// 84px -> header height
		height: calc(100vh - 84px);

		> img {
			width: 276px;

			margin-top: 2rem;
		}

		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		margin-top: 1rem;
	}
`;

export const OrderHeaderContainer = styled.div`
	h1 {
		font-weight: 800;
		font-size: 2rem;

		color: ${props => props.theme['yellow-700']};
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-size: 1.25rem;

		color: ${props => props.theme.subtitle};
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1rem;
		}
	}
`;

export const GradientElement = styled.div`
	background: linear-gradient(
		${props => props.theme['yellow-500']},
		${props => props.theme['purple-500']}
	);

	border-radius: 6px 36px;

	padding: 1px;

	margin-top: 2.5rem;

	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

export const OrderDataCard = styled.div`
	max-width: 526px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;

	padding: 2.5rem;

	border-radius: 6px 36px;

	background: ${props => props.theme.background};

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		& + & {
			margin-top: 2rem;
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;

		> div {
			& + & {
				margin-top: 1rem;
			}
		}
	}
`;

export const OrderDataTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	font-family: 'Roboto', sans-serif;
	color: ${props => props.theme.text};

	strong {
		width: 100%;

		font-weight: 700;
	}

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`;
