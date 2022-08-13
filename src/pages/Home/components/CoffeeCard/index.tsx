import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';
import { CoffeeAmountButtons } from '../../../../components/CoffeeAmountButtons';
import { ICoffee, useCart } from '../../../../contexts/CartContext';
import { CoffeeCardHeader } from './Header';
import {
	ButtonsContainer,
	Card,
	PriceContainer,
	ShoppingCartButton,
} from './styles';

interface ICoffeeCardProps {
	coffee: ICoffee;
}

export function CoffeeCard({ coffee }: ICoffeeCardProps) {
	const { addItem } = useCart();
	const [coffeeAmount, setCoffeeAmount] = useState(1);

	function handleIncreaseCoffeeAmount() {
		setCoffeeAmount(prevState => prevState + 1);
	}

	function handleDecreaseCoffeeAmount() {
		setCoffeeAmount(prevState => prevState - 1);
	}

	function handleAddToCart() {
		addItem({
			coffee,
			amount: coffeeAmount,
		});
	}

	const formatter = new Intl.NumberFormat('pt-BR', {
		currency: 'BRL',
		style: 'currency',
	});

	const formattedPrice = formatter.format(coffee.price / 100);
	const currency = formattedPrice.slice(0, 2);
	const formattedNumber = formattedPrice.slice(3);

	return (
		<Card>
			<CoffeeCardHeader coffee={coffee} />

			<h1>{coffee.name}</h1>
			<p>{coffee.description}</p>

			<footer>
				<PriceContainer>
					<span>{currency}</span> {formattedNumber}
				</PriceContainer>

				<ButtonsContainer>
					<CoffeeAmountButtons
						externalStateData={{
							coffeeAmount,
							handleIncreaseCoffeeAmount,
							handleDecreaseCoffeeAmount,
						}}
					/>
					<ShoppingCartButton
						type="button"
						onClick={handleAddToCart}
						title="Adicionar ao carrinho"
					>
						<ShoppingCartSimple
							size={22}
							weight="fill"
							color="white"
						/>
					</ShoppingCartButton>
				</ButtonsContainer>
			</footer>
		</Card>
	);
}
