import { CoffeeInfoContainer, Container, PriceContainer } from './styles';
import coffeeImage from '../../../../../../assets/coffeeSample1.png';
import { ButtonsContainer, RemoveItemButtonContainer } from './styles';
import { CoffeeAmountButtons } from '../../../../../../components/CoffeeAmountButtons';
import { Trash } from 'phosphor-react';
import { ICoffee, useCart } from '../../../../../../contexts/CartContext';

interface ICoffeeItemProps {
	cartItem: {
		coffee: ICoffee;
		amount: number;
	};
	priceFormatter: Intl.NumberFormat;
}

export function CoffeeItem({ cartItem, priceFormatter }: ICoffeeItemProps) {
	const { removeItemByCoffeeId } = useCart();

	const { coffee, amount } = cartItem;

	function handleRemoveItem() {
		removeItemByCoffeeId(coffee.id);
	}

	return (
		<Container>
			<CoffeeInfoContainer>
				<img src={coffee.imgUrl} alt="" />
				<div>
					<h3>{coffee.name}</h3>
					<ButtonsContainer>
						<CoffeeAmountButtons cartItem={{ coffee, amount }} />
						<RemoveItemButtonContainer onClick={handleRemoveItem}>
							<Trash size={16} />
							<span>Remover</span>
						</RemoveItemButtonContainer>
					</ButtonsContainer>
				</div>
			</CoffeeInfoContainer>
			<PriceContainer>
				{priceFormatter.format(coffee.price / 100)}
			</PriceContainer>
		</Container>
	);
}
