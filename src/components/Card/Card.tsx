import React from 'react';
import { Button } from '../Button/Button';
import { CardItem } from './CardItem';
export function Card(props) {
	const handleAdd = () => {
		console.log('hello');
	};
	return (
		<div className="bg-gray-200 h-full p-2 w-2/12 mr-8">
			<h3 className="text-lg font-medium my-2">{props.title}</h3>
			<div>
				<ul>
					{props.data.map((data, i) => (
						<CardItem key={i} text={data} />
					))}
				</ul>
				<Button onClick={() => handleAdd()}>Add card</Button>
			</div>
		</div>
	);
}
