import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { IconWithBackground } from '../../../../../components/IconWithBackground';
import { Perk, PerksContainer } from './styles';

export function PerksList() {
	return (
		<PerksContainer>
			<Perk>
				<IconWithBackground
					backgroundColor="yellow-700"
					Icon={<ShoppingCart weight="fill" size={22} />}
				/>

				<span>Compra simples e segura</span>
			</Perk>
			<Perk>
				<IconWithBackground
					backgroundColor="text"
					Icon={<Package weight="fill" size={22} />}
				/>
				<span>Embalagem mantém o café intacto</span>
			</Perk>
			<Perk>
				<IconWithBackground
					backgroundColor="yellow-500"
					Icon={<Timer weight="fill" size={22} />}
				/>
				<span>Entrega rápida e rastreada</span>
			</Perk>
			<Perk>
				<IconWithBackground
					backgroundColor="purple-500"
					Icon={<Coffee weight="fill" size={22} />}
				/>
				<span>O café chega fresquinho até você</span>
			</Perk>
		</PerksContainer>
	);
}
