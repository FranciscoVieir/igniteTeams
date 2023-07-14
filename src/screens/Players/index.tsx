import { Header } from '@components/Header';
import { ButtonIcoin } from '@components/ButtonIcoin';

import { Highlight } from '@components/Highlight';

import { Container, Form } from './styles';
import { Input } from '@components/Input';

export function Players() {
	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title="Nome da turma"
				subtitle="adicione a galera e separe os times"
			/>
			<Form>
				<Input placeholder="Nome da pessoa" autoCorrect={false} />

				<ButtonIcoin icon="add" />
			</Form>
		</Container>
	);
}
