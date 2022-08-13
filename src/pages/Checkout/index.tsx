import { useCart } from '../../contexts/CartContext';
import { CheckoutForm } from './components/CheckoutForm';
import { EmptyCartScreen } from './components/EmptyCartScreen';
import { OrderInfoCard } from './components/OrderInfoCard';
import { AsideCard, Container, MainCards } from './styles';

export function Checkout() {
	const { coffees } = useCart();

	return (
		<Container>
			{coffees.length === 0 ? (
				<EmptyCartScreen />
			) : (
				<>
					<MainCards>
						<h1>Complete seu pedido</h1>
						<CheckoutForm />
					</MainCards>

					<AsideCard>
						<h1>Cafés selecionados</h1>
						<OrderInfoCard />
					</AsideCard>
				</>
			)}
		</Container>
	);
}
