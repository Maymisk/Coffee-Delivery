import styled from 'styled-components';

export const InputsCard = styled.div`
	background: ${props => props.theme.card};

	padding: 2.5rem;

	border-radius: 6px;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const InputsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	row-gap: 1rem;
	column-gap: 0.75rem;

	margin-top: 2rem;
`;

export const BaseInput = styled.input`
	height: 2.625rem;

	background: ${props => props.theme.input};

	border: 1px solid ${props => props.theme.button};
	border-radius: 4px;

	padding: 0.75rem;

	@media (max-width: 768px) {
		flex: 1;
	}
`;

export const StreetInput = styled(BaseInput)`
	flex: 1 100%;
`;

export const AddressInput = styled(BaseInput)`
	flex: 1;
`;

export const CityInput = styled(BaseInput)`
	flex: 1;
`;

export const StateInput = styled(BaseInput)`
	width: 60px;
`;
