import styled from 'styled-components';

export const CoffeeSection = styled.div`
	display: flex;
	flex-direction: column;

	padding-top: 2rem;

	> h1 {
		font-size: 2rem;
		font-weight: 800;
	}

	@media (max-width: 768px) {
		align-items: center;
	}
`;
