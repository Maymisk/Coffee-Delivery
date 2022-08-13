import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { ICoffee, useCart } from '../../contexts/CartContext';
import { CounterContainer } from './styles';

interface ICartItem {
	coffee: ICoffee;
	amount: number;
}

interface ICoffeeAmountButtonsProps {
	cartItem?: ICartItem;
	externalStateData?: {
		coffeeAmount: number;
		handleIncreaseCoffeeAmount(): void;
		handleDecreaseCoffeeAmount(): void;
	};
}

function Buttons({
	externalStateData,
}: Pick<ICoffeeAmountButtonsProps, 'externalStateData'>) {
	const {
		coffeeAmount,
		handleIncreaseCoffeeAmount,
		handleDecreaseCoffeeAmount,
	} = externalStateData!;
	const cantDecreaseCoffeAmount = coffeeAmount - 1 <= 0;

	return (
		<CounterContainer>
			<button
				onClick={handleDecreaseCoffeeAmount}
				disabled={cantDecreaseCoffeAmount}
			>
				<Minus size={14} weight="bold" />
			</button>
			<div>{coffeeAmount}</div>
			<button onClick={handleIncreaseCoffeeAmount}>
				<Plus size={14} weight="bold" />
			</button>
		</CounterContainer>
	);
}

export function CoffeeAmountButtons({
	cartItem,
	externalStateData,
}: ICoffeeAmountButtonsProps) {
	// checks if the coffee amount value will be based on an external state (home page) or on cart data (checkout page)
	if (cartItem) {
		const [coffeeAmount, setCoffeeAmount] = useState(cartItem.amount);
		const { updateCoffeeAmount } = useCart();

		function handleIncreaseCoffeeAmount() {
			setCoffeeAmount(prevState => prevState + 1);
			updateCoffeeAmount(cartItem!.coffee.id, coffeeAmount + 1);
		}

		function handleDecreaseCoffeeAmount() {
			setCoffeeAmount(prevState => {
				const newState = prevState - 1;

				updateCoffeeAmount(cartItem!.coffee.id, newState);

				return newState;
			});
		}

		return (
			<Buttons
				externalStateData={{
					coffeeAmount,
					handleIncreaseCoffeeAmount,
					handleDecreaseCoffeeAmount,
				}}
			/>
		);
	}

	const {
		coffeeAmount,
		handleIncreaseCoffeeAmount,
		handleDecreaseCoffeeAmount,
	} = externalStateData!;

	return (
		<Buttons
			externalStateData={{
				coffeeAmount,
				handleIncreaseCoffeeAmount,
				handleDecreaseCoffeeAmount,
			}}
		/>
	);
}
