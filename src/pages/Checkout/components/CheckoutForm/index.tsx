import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CheckoutFormSchema } from '../../../../formSchemas/CheckoutFormSchema';
import { AddressFormInputsCard } from './components/AddressFormInputsCard';
import {
	PaymentMethods,
	PaymentMethodsCard,
} from './components/PaymentMethodsCard';

type PaymentMethodType = keyof typeof PaymentMethods;

interface IFormData {
	zip: number;
	street: string;
	number: number;
	address?: string;
	district: string;
	city: string;
	state: string;
}

function CheckoutFormComponent() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>(
		'' as PaymentMethodType
	);

	const navigate = useNavigate();

	const checkoutForm = useForm<IFormData>({
		resolver: zodResolver(CheckoutFormSchema),
	});

	const { handleSubmit, reset, formState } = checkoutForm;

	function updatePaymentMethod(value: PaymentMethodType) {
		setPaymentMethod(value);
	}

	function handleFormSubmission(data: IFormData) {
		if (!paymentMethod) return;
		// cart clean up is done on the /success page so the form doesn't re render unnecessarily
		reset();

		navigate('/success', {
			replace: true,
			state: {
				...data,
				paymentMethod,
			},
		});
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmission)} id="checkoutForm">
			<FormProvider {...checkoutForm}>
				<AddressFormInputsCard />
			</FormProvider>

			<PaymentMethodsCard
				selectedPaymentMethod={paymentMethod}
				udpatePaymentMethod={updatePaymentMethod}
			/>
		</form>
	);
}

export const CheckoutForm = memo(CheckoutFormComponent);
