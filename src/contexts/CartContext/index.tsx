import { createContext, ReactNode, useContext, useReducer } from 'react';
import { cartReducer } from '../../reducers/CartReducer';
import {
	addCoffeeAction,
	clearCartAction,
	removeCoffeeAction,
	updateCoffeeAmountAction,
} from '../../reducers/CartReducer/actions';

export interface ICoffee {
	id: string;
	name: string;
	description: string;
	price: number;
	imgUrl: string;
	tags: string[];
}

interface ICartItem {
	coffee: ICoffee;
	amount: number;
}

interface ICartContextData {
	coffees: ICartItem[];
	addItem(item: ICartItem): void;
	removeItemByCoffeeId(id: string): void;
	updateCoffeeAmount(id: string, newValue: number): void;
	clearCart(): void;
}

interface ICartContextProviderProps {
	children: ReactNode;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

export function CartContextProvider({ children }: ICartContextProviderProps) {
	const [coffeesState, dispatch] = useReducer(cartReducer, {
		coffees: [],
	});

	function addItem(item: ICartItem) {
		dispatch(addCoffeeAction(item));
	}

	function removeItemByCoffeeId(id: string) {
		dispatch(removeCoffeeAction(id));
	}

	function updateCoffeeAmount(id: string, newValue: number) {
		dispatch(updateCoffeeAmountAction(id, newValue));
	}

	function clearCart() {
		dispatch(clearCartAction());
	}

	const { coffees } = coffeesState;

	return (
		<CartContext.Provider
			value={{
				coffees,
				addItem,
				removeItemByCoffeeId,
				updateCoffeeAmount,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
