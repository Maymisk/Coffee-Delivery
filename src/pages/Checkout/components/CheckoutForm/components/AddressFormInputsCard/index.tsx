import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { DescriptionContainer } from '../../../../styles';
import {
	AddressInput,
	BaseInput,
	CityInput,
	InputsCard,
	InputsContainer,
	StreetInput,
	StateInput,
} from './styles';

export function AddressFormInputsCard() {
	const { register, formState } = useFormContext();

	return (
		<InputsCard>
			<DescriptionContainer iconColor="yellow-700">
				<MapPinLine size={22} />
				<div>
					<h1>Endereço de entrega</h1>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</DescriptionContainer>
			<InputsContainer>
				<BaseInput
					type="number"
					placeholder="CEP"
					{...register('zip', {
						valueAsNumber: true,
					})}
					autoFocus
				/>
				<StreetInput
					type="text"
					placeholder="Rua"
					{...register('street')}
				/>
				<BaseInput
					type="number"
					placeholder="1000"
					{...register('number', { valueAsNumber: true })}
				/>
				<AddressInput
					type="text"
					placeholder="Complemento"
					{...register('address')}
				/>
				<BaseInput
					type="text"
					placeholder="Bairro"
					{...register('district')}
				/>
				<CityInput
					type="text"
					placeholder="Cidade"
					{...register('city')}
				/>
				<StateInput
					type="text"
					placeholder="UF"
					{...register('state')}
				/>
			</InputsContainer>
		</InputsCard>
	);
}
