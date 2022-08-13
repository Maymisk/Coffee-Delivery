import styled from 'styled-components';
import { defaultTheme } from '../../../../styles/themes/default';

export const BannerContainer = styled.div`
	padding-block: 5.25rem;

	> div {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 4.5rem;
	}

	@media (max-width: 768px) {
		padding-block: 1rem;

		> div {
			flex-direction: column;
			align-items: center;

			img {
				width: 276px;
			}
		}
	}
`;

export const TextContainer = styled.div`
	h1 {
		font-size: 3rem;
		font-weight: 800;

		color: ${props => props.theme.title};
	}

	p {
		font-family: 'Roboto', sans-serif;

		font-weight: 400;
		font-size: 1.25rem;

		margin-top: 1rem;

		color: ${props => props.theme.subtitle};
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;

			text-align: center;
		}

		p {
			font-size: 1rem;
			text-align: center;
		}
	}
`;
