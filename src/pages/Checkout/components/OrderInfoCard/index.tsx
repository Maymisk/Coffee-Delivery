import { useCart } from '../../../../contexts/CartContext';
import { CoffeeItem } from './components/CoffeeItem';
import { Prices } from './components/Prices';
import { Container, OrderButton } from './styles';

export function OrderInfoCard() {
	const { coffees } = useCart();

	const formatter = new Intl.NumberFormat('pt-BR', {
		currency: 'BRL',
		style: 'currency',
	});

	return (
		<Container>
			<div>
				{coffees.map(cartItem => {
					return (
						<CoffeeItem
							key={cartItem.coffee.id}
							cartItem={cartItem}
							priceFormatter={formatter}
						/>
					);
				})}
			</div>

			<Prices priceFormatter={formatter} />

			<OrderButton type="submit" form="checkoutForm">
				Confirmar Pedido
			</OrderButton>
		</Container>
	);
}
