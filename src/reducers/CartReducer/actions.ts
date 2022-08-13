import { ICoffee } from '../../contexts/CartContext';

export enum CartActionTypes {
	ADD_COFFEE = 'ADD_COFFEE',
	REMOVE_COFFEE = 'REMOVE_COFFEE',
	UPDATE_COFFEE_AMOUNT = 'UPDATE_COFFEE_AMOUNT',
	CLEAR_CART = 'CLEAR_CART',
}

export interface ICartAction {
	type: CartActionTypes;
	payload: any;
}

interface ICartItem {
	coffee: ICoffee;
	amount: number;
}

export function addCoffeeAction(cartItem: ICartItem): ICartAction {
	return {
		type: CartActionTypes.ADD_COFFEE,
		payload: {
			cartItem,
		},
	};
}

export function removeCoffeeAction(id: string): ICartAction {
	return {
		type: CartActionTypes.REMOVE_COFFEE,
		payload: {
			id,
		},
	};
}

export function updateCoffeeAmountAction(
	id: string,
	newAmount: number
): ICartAction {
	return {
		type: CartActionTypes.UPDATE_COFFEE_AMOUNT,
		payload: {
			id,
			newAmount,
		},
	};
}

export function clearCartAction() {
	return {
		type: CartActionTypes.CLEAR_CART,
		payload: {},
	};
}
