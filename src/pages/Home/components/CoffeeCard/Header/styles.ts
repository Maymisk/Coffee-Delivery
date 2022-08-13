import styled from 'styled-components';

export const TagContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.25rem;

	margin: 0.75rem 0 1rem;
`;

export const Tag = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	font-size: 0.625rem;

	text-transform: uppercase;

	border-radius: 999px;

	background: ${props => props.theme['yellow-100']};
	color: ${props => props.theme['yellow-700']};

	padding: 0.25rem 0.5rem;
`;
