import { useState } from 'react';
import { Header } from '@components/Header';
import { ButtonIcoin } from '@components/ButtonIcoin';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { PlayerCard } from '@components/PlayerCard';

export function Players() {
	const [team, setTeam] = useState('TIME A');
	const [players, setPlayers] = useState(['RODRIGO', 'Vini']);

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

			<HeaderList>
				<FlatList
					data={['TIME A', 'TIME B']}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							isActive={item === team}
							title={item}
							onPress={() => setTeam(item)}
						/>
					)}
					horizontal
				/>

				<NumbersOfPlayers>{players.length}</NumbersOfPlayers>
			</HeaderList>

			<FlatList
				data={players}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<PlayerCard name={item} onRemove={() => {}} />
				)}
			/>
		</Container>
	);
}
