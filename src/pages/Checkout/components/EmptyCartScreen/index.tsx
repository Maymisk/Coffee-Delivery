import { Container, Emoji } from './styles';

export function EmptyCartScreen() {
	return (
		<Container>
			<div>
				<h1>Seu carrinho está vazio!</h1>
				<p>
					Volte para a home e selecione alguns dos cafés no nosso menu
					😋
				</p>
				<Emoji>🏃‍♀️💨</Emoji>
			</div>
		</Container>
	);
}
