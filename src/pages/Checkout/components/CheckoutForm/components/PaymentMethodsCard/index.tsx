import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { DescriptionContainer } from '../../../../styles';
import {
	PaymentInfoContainer,
	PaymentMethodButton,
	PaymentMethodsContainer,
} from './styles';

export enum PaymentMethods {
	MONEY = 'MONEY',
	CREDIT_CARD = 'CREDIT_CARD',
	DEBIT_CARD = 'DEBIT_CARD',
}

type PaymentMethodType = keyof typeof PaymentMethods;

interface IPaymentMethodsCardProps {
	selectedPaymentMethod: string;
	udpatePaymentMethod(newType: PaymentMethodType): void;
}

export function PaymentMethodsCard({
	selectedPaymentMethod,
	udpatePaymentMethod,
}: IPaymentMethodsCardProps) {
	return (
		<PaymentInfoContainer>
			<DescriptionContainer iconColor="purple-500">
				<CurrencyDollar size={22} />
				<div>
					<h1>Pagamento</h1>
					<p>
						O pagamento é feito na entrega. Escolha a forma que
						deseja pagar.
					</p>
				</div>
			</DescriptionContainer>

			<PaymentMethodsContainer>
				<PaymentMethodButton
					type="button"
					isSelected={
						selectedPaymentMethod === PaymentMethods.CREDIT_CARD
					}
					onClick={() =>
						udpatePaymentMethod(PaymentMethods.CREDIT_CARD)
					}
				>
					<CreditCard size={16} />
					CARTÃO DE CRÉDITO
				</PaymentMethodButton>

				<PaymentMethodButton
					type="button"
					isSelected={
						selectedPaymentMethod === PaymentMethods.DEBIT_CARD
					}
					onClick={() =>
						udpatePaymentMethod(PaymentMethods.DEBIT_CARD)
					}
				>
					<Bank size={16} />
					CARTÃO DE DÉBITO
				</PaymentMethodButton>

				<PaymentMethodButton
					isSelected={selectedPaymentMethod === PaymentMethods.MONEY}
					onClick={() => udpatePaymentMethod(PaymentMethods.MONEY)}
					type="button"
				>
					<Money size={16} />
					Dinheiro
				</PaymentMethodButton>
			</PaymentMethodsContainer>
		</PaymentInfoContainer>
	);
}
