import { CoffeeSection } from './styles';
import { Banner } from './components/Banner';
import { CoffeeList } from './components/CoffeesList';

export function Home() {
	return (
		<div>
			<Banner />

			<CoffeeSection>
				<h1>Nossos cafés</h1>

				<CoffeeList />
			</CoffeeSection>
		</div>
	);
}
