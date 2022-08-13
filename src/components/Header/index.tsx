import { MapPin, ShoppingCart } from 'phosphor-react';
import logoPath from '../../assets/Logo.svg';
import {
	CheckoutButton,
	HeaderContainer,
	Info,
	LocationContainer,
} from './styles';
import { NavLink } from 'react-router-dom';
import { CartItemCounter } from './CartItemCounter';

export function Header() {
	return (
		<HeaderContainer>
			<a href="/" title="Ir para a home">
				<img src={logoPath} alt="Coffee delivery logo" />
			</a>

			<Info>
				<LocationContainer>
					<MapPin size="22px" weight="fill" />
					<div>Porto Alegre, RS</div>
				</LocationContainer>

				<CheckoutButton>
					<NavLink to={'/checkout'} title="Ir para o checkout">
						<ShoppingCart size="22px" weight="fill" />
						<CartItemCounter />
					</NavLink>
				</CheckoutButton>
			</Info>
		</HeaderContainer>
	);
}
