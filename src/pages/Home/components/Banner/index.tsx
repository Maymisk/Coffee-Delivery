import coffeeImage from '../../../../assets/coffee.png';
import { BannerContainer, TextContainer } from './styles.';
import { PerksList } from './PerksList';

export function Banner() {
	return (
		<BannerContainer>
			<div>
				<div>
					<TextContainer>
						<h1>
							Encontre o café perfeito para qualquer hora do dia
						</h1>
						<p>
							Com o Coffee Delivery você recebe seu café onde
							estiver, a qualquer hora
						</p>
					</TextContainer>
					<PerksList />
				</div>

				<img src={coffeeImage} alt="Coffee cup" />
			</div>
		</BannerContainer>
	);
}
