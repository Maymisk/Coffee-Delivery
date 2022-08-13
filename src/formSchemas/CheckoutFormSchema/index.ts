import * as zod from 'zod';

export const CheckoutFormSchema = zod.object({
	// i didnt put much time into the validation, as you might've noticed
	zip: zod.number().min(10000000, 'CEP inválido'),
	street: zod.string(),
	number: zod.number().min(1, 'Número inválido'),
	address: zod.string().optional(),
	district: zod.string().min(1, 'Informe o bairro'),
	city: zod.string().min(1, 'Informe a cidade'),
	state: zod
		.string()
		.min(1)
		.max(2, 'Máximo de dois caracteres (sigla do estado)'),
});
