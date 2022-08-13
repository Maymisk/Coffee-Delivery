import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	margin-top: 1.5rem;
`;

const BasePriceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	font-family: 'Roboto', sans-serif;
`;

export const PriceInfoContainer = styled(BasePriceContainer)`
	font-size: 0.875rem;

	span {
		font-size: 1rem;
	}
`;

export const TotalContainer = styled(BasePriceContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	font-size: 1.25rem;

	color: ${props => props.theme.subtitle};
`;
