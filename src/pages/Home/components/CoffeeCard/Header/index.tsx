import { ICoffee } from '../../../../../contexts/CartContext';
import { Tag, TagContainer } from './styles';

interface ICoffeeCardHeaderProps {
	coffee: ICoffee;
}

export function CoffeeCardHeader({ coffee }: ICoffeeCardHeaderProps) {
	return (
		<header>
			<img src={coffee.imgUrl} alt="" />
			<TagContainer>
				{coffee.tags.map(tag => (
					<Tag key={coffee.imgUrl}>{tag}</Tag>
				))}
			</TagContainer>
		</header>
	);
}
