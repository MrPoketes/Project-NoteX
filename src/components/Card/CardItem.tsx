import React from 'react';

interface CardItemInterface {
	text: string;
}
export const CardItem: React.FC<CardItemInterface> = ({ text }) => (
	<li className="bg-white py-2 my-2">
		<p className="ml-2">{text}</p>
	</li>
);
