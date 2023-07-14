import { ButtonIcoin } from '@components/ButtonIcoin';
import { Container, Icon, Name } from './styles';

type Props = {
	name: string;
	onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
	return (
		<Container>
			<Icon name="person" />

			<Name>{name}</Name>
			<ButtonIcoin type="SECONDARY" icon="close" onPress={onRemove} />
		</Container>
	);
}
