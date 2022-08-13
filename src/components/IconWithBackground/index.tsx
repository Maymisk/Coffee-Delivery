import { Icon } from 'phosphor-react';
import { ElementType, ReactElement } from 'react';
import { defaultTheme } from '../../styles/themes/default';
import { Container } from './styles';

interface IconWithBackgroundProps {
	backgroundColor: keyof typeof defaultTheme;
	Icon: JSX.Element;
}

// not peak creativity
export function IconWithBackground({
	backgroundColor,
	Icon,
}: IconWithBackgroundProps) {
	return <Container backgroundColor={backgroundColor}>{Icon}</Container>;
}
