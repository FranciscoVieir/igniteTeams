import { Header } from '@components/Header';
import { ButtonIcoin } from '@components/ButtonIcoin';

import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Players() {
	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title="Nome da turma"
				subtitle="adicione a galera e separe os times"
			/>

			<ButtonIcoin />
		</Container>
	);
}
