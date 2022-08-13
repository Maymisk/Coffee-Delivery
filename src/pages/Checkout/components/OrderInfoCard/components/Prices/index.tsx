import { useCart } from '../../../../../../contexts/CartContext';
import { Container, PriceInfoContainer, TotalContainer } from './styles';

interface IPricesProps {
	priceFormatter: Intl.NumberFormat;
}

export function Prices({ priceFormatter }: IPricesProps) {
	const { coffees } = useCart();

	const itemsTotalPrice = coffees.reduce((sum, cartItem) => {
		return (sum += (cartItem.coffee.price * cartItem.amount) / 100);
	}, 0);

	return (
		<Container>
			<PriceInfoContainer>
				Total de itens{' '}
				<span>{priceFormatter.format(itemsTotalPrice)}</span>
			</PriceInfoContainer>

			<PriceInfoContainer>
				Entrega <span>R$ 3,50</span>
			</PriceInfoContainer>

			<TotalContainer>
				Total{' '}
				<span>{priceFormatter.format(itemsTotalPrice + 3.5)}</span>
			</TotalContainer>
		</Container>
	);
}
