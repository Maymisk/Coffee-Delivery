import { Coffees } from '../../../../../coffeeSample';
import { CoffeeCard } from '../CoffeeCard';
import { Container } from './styles';

export function CoffeeList() {
	return (
		<Container>
			{Coffees.map(coffee => {
				return <CoffeeCard key={coffee.id} coffee={coffee} />;
			})}
		</Container>
	);
}
