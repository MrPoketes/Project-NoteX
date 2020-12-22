import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/Card/Card';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Home() {
	const cardData = [
		{ title: 'First', data: ['Hello', 'World'], label: '' },
		{ title: 'Second', data: ['Hello', 'World', 'Yes'], label: '' },
		{ title: 'Third', data: ['Hello', 'World', 'Huh'], label: '' },
		{ title: 'Fourth', data: ['Hello', 'World', 'S', 'Yo', 'Good'], label: '' }
	];
	return (
		<Layout>
			{cardData.map((data, i) => (
				<Card
					key={i}
					title={data.title}
					data={data.data}
					index={i}
					label={data.label}
				/>
			))}
		</Layout>
	);
}
