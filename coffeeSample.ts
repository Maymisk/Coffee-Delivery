import { v4 } from 'uuid';

interface ICoffee {
	id: string;
	name: string;
	description: string;
	price: number;
	imgUrl: string;
	tags: string[];
}

export const Coffees: ICoffee[] = [
	{
		id: v4(),
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 990,
		imgUrl: '/coffees/traditional.png',
		tags: ['Tradicional'],
	},
	{
		id: v4(),
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 990,
		imgUrl: '/coffees/american.png',
		tags: ['Tradicional'],
	},
	{
		id: v4(),
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 990,
		imgUrl: '/coffees/creamy.png',
		tags: ['Tradicional'],
	},
	{
		id: v4(),
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 990,
		imgUrl: '/coffees/cold.png',
		tags: ['Tradicional', 'gelado'],
	},
	{
		id: v4(),
		name: 'Café com leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 990,
		imgUrl: '/coffees/withMilk.png',
		tags: ['Tradicional', 'com leite'],
	},
	{
		id: v4(),
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 990,
		imgUrl: '/coffees/latte.png',
		tags: ['Tradicional', 'com leite'],
	},
	{
		id: v4(),
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 990,
		imgUrl: '/coffees/capuccino.png',
		tags: ['Tradicional', 'com leite'],
	},
	{
		id: v4(),
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		price: 990,
		imgUrl: '/coffees/macchiato.png',
		tags: ['Tradicional', 'com leite'],
	},
	{
		id: v4(),
		name: 'Mocaccino',
		description:
			'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 990,
		imgUrl: '/coffees/mocaccino.png',
		tags: ['tradicional', 'com leite'],
	},
	{
		id: v4(),
		name: 'Chocolate Quente',
		description:
			'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 990,
		imgUrl: '/coffees/hotChocolate.png',
		tags: ['especial', 'com leite'],
	},
	{
		id: v4(),
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 990,
		imgUrl: '/coffees/cuban.png',
		tags: ['especial', 'alcoólico', 'gelado'],
	},
	{
		id: v4(),
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 990,
		imgUrl: '/coffees/hawaii.png',
		tags: ['especial'],
	},
	{
		id: v4(),
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 990,
		imgUrl: '/coffees/arabian.png',
		tags: ['especial'],
	},
	{
		id: v4(),
		name: 'Irlandês',
		description:
			'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 990,
		imgUrl: '/coffees/irish.png',
		tags: ['especial', 'alcoólico'],
	},
];
