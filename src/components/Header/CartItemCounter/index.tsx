import { useCart } from '../../../contexts/CartContext';
import { Container } from './styles';

export function CartItemCounter() {
	const { coffees } = useCart();

	const totalItems = coffees.reduce((sum, cartItem) => {
		return (sum += cartItem.amount);
	}, 0);

	if (totalItems > 0) {
		return <Container>{totalItems}</Container>;
	}

	return null;
}
