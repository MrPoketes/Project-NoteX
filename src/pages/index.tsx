import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/Card/Card';

export default function Home() {
	const cardData = [
		{
			title: 'First',
			data: [
				{ itemLabel: '', itemText: 'Hello' },
				{ itemLabel: '', itemText: 'World' }
			]
		},
		{
			title: 'Second',
			data: [
				{ itemLabel: '', itemText: 'Hello' },
				{ itemLabel: '', itemText: 'World' },
				{ itemLabel: '', itemText: 'Yes' }
			]
		},
		{
			title: 'Third',
			data: [
				{ itemLabel: '', itemText: 'Hello' },
				{ itemLabel: '', itemText: 'World' },
				{ itemLabel: '', itemText: 'Huh' }
			]
		},
		{
			title: 'Fourth',
			data: [
				{ itemLabel: '', itemText: 'Hello' },
				{ itemLabel: '', itemText: 'World' },
				{ itemLabel: '', itemText: 'YoYoYo' },
				{ itemLabel: '', itemText: 'Good' },
				{ itemLabel: '', itemText: 'A good quote' }
			]
		}
	];
	const [winReady, setWinReady] = useState(false);
	useEffect(() => {
		setWinReady(true);
	}, []);
	return (
		<Layout>
			{winReady ? (
				<>
					{cardData.map((data, i) => (
						<Card key={i} title={data.title} data={data.data} index={i} />
					))}
				</>
			) : null}
		</Layout>
	);
}
