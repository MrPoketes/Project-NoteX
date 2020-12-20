import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/Card/Card';

export default function Home() {
	const cardData = ['Hello', 'World', 'This', 'MyApp'];
	return (
		<Layout>
			<Card title="Testing" data={cardData} />
			<Card title="Testing" data={cardData} />
			<Card title="Testing" data={cardData} />
			<Card title="Testing" data={cardData} />
		</Layout>
	);
}
