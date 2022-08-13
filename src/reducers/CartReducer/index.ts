import { ICoffee } from '../../contexts/CartContext';
import { CartActionTypes, ICartAction } from './actions';

interface ICartItem {
	coffee: ICoffee;
	amount: number;
}

interface ICartState {
	coffees: ICartItem[];
}

/* 
	hover nos botoes,
	fake api
*/
export function cartReducer(
	state: ICartState,
	action: ICartAction
): ICartState {
	if (action.type === CartActionTypes.ADD_COFFEE) {
		const filteredItems = state.coffees.filter(
			cartItem => cartItem.coffee.id != action.payload.cartItem.coffee.id
		);

		return {
			coffees: [...filteredItems, action.payload.cartItem],
		};
	}

	if (action.type === CartActionTypes.REMOVE_COFFEE) {
		const filteredItems = state.coffees.filter(
			cartItem => cartItem.coffee.id != action.payload.id
		);

		return {
			coffees: [...filteredItems],
		};
	}

	if (action.type === CartActionTypes.UPDATE_COFFEE_AMOUNT) {
		const coffees = state.coffees.map(cartItem => {
			if (cartItem.coffee.id === action.payload.id) {
				return {
					...cartItem,
					amount: action.payload.newAmount,
				};
			}

			return cartItem;
		});

		return {
			coffees,
		};
	}

	if (action.type === CartActionTypes.CLEAR_CART) {
		return {
			coffees: [],
		};
	}

	return state;
}
