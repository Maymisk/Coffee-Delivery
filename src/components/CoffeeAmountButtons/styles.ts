import styled from 'styled-components';

export const CounterContainer = styled.div`
	width: 4.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	font-family: 'Roboto', sans-serif;

	color: ${props => props.theme.title};
	background: ${props => props.theme.button};

	border-radius: 6px;

	padding: 0.5rem;

	button {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		background: transparent;

		svg {
			transition: color 0.2s;

			color: ${props => props.theme['purple-500']};
		}

		&:disabled {
			svg {
				opacity: 0.3;
			}
		}

		&:hover {
			svg {
				color: ${props => props.theme['purple-700']};
			}
		}
	}
`;
