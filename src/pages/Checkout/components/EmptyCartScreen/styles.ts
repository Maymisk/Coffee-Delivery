import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 700;

	div {
		text-align: center;

		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
`;

export const Emoji = styled.div`
	font-size: 10rem;

	@media (max-width: 768px) {
		font-size: 7rem;
	}
`;
