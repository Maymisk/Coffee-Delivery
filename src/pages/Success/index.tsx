import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { IconWithBackground } from '../../components/IconWithBackground';
import {
	Container,
	GradientElement,
	OrderDataCard,
	OrderDataTextContainer,
	OrderHeaderContainer,
} from './styles';

import deliveryManImagePath from '../../assets/deliveryman.svg';
import { useLocation } from 'react-router-dom';
import { PaymentMethods } from '../Checkout/components/CheckoutForm/components/PaymentMethodsCard';
import { useCart } from '../../contexts/CartContext';
import { useEffect } from 'react';

interface IRedirectData {
	zip: number;
	street: string;
	number: number;
	address?: string;
	district: string;
	city: string;
	uf: string;
	paymentMethod: PaymentMethods;
}

const { CREDIT_CARD, DEBIT_CARD, MONEY } = PaymentMethods;

const paymentMethodsMapper = {
	CREDIT_CARD: 'Cartão de Crédito',
	DEBIT_CARD: 'Cartão de Débito',
	MONEY: 'Dinheiro',
};

export function Success() {
	const { clearCart } = useCart();
	const location = useLocation();

	if (!location.state) {
		return null;
	}

	const { street, number, address, district, city, uf, paymentMethod } =
		location.state as IRedirectData;

	useEffect(() => {
		clearCart();
	}, []);

	return (
		<Container>
			<div>
				<OrderHeaderContainer>
					<h1>Uhu! Pedido Confirmado</h1>
					<p>Agora é só aguardar que o café chegará até você</p>
				</OrderHeaderContainer>

				<GradientElement>
					<OrderDataCard>
						<div>
							<IconWithBackground
								backgroundColor="purple-500"
								Icon={<MapPin size={16} weight="fill" />}
							/>
							<OrderDataTextContainer>
								<p>
									Entrega em{' '}
									<strong>
										{street}, {number}
									</strong>
								</p>
								<strong>
									{district} - {city}, {uf}
								</strong>
							</OrderDataTextContainer>
						</div>

						<div>
							<IconWithBackground
								backgroundColor="yellow-500"
								Icon={<Timer size={16} weight="fill" />}
							/>
							<OrderDataTextContainer>
								{/* estimated delivery time */}
								<p>Previsão de entrega</p>
								<strong>20 min - 30 min</strong>
							</OrderDataTextContainer>
						</div>

						<div>
							<IconWithBackground
								backgroundColor="yellow-700"
								Icon={
									<CurrencyDollar size={16} weight="fill" />
								}
							/>
							<OrderDataTextContainer>
								<p>Pagamento na entrega</p>
								<strong>
									{paymentMethodsMapper[paymentMethod]}
								</strong>
							</OrderDataTextContainer>
						</div>
					</OrderDataCard>
				</GradientElement>
			</div>

			<img src={deliveryManImagePath} alt="Deliveryman drawing" />
		</Container>
	);
}
