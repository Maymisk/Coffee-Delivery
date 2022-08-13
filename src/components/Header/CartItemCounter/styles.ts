import styled from 'styled-components';

export const Container = styled.div`
	width: 20px;
	height: 20px;

	background: ${props => props.theme['yellow-700']};

	border-radius: 50%;

	position: absolute;
	right: -15px;
	top: -15px;

	font-family: 'Roboto', sans-serif;
	font-size: 0.75rem;
	font-weight: 700;

	color: ${props => props.theme.white};

	text-align: center;
	line-height: 20px;
`;
