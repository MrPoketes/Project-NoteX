import React from 'react';
import { ButtonInterface } from './ButtonInterface';

export const Button: React.FC<ButtonInterface> = props => {
	const getStyles = (): string => {
		if (props.type === 'primary') {
			return `bg-${props.color}-600 hover:bg-${props.color}-500`;
		}
		if (props.type === 'outlined') {
			return `bg-${props.color}-200 hover:bg-${props.color}-300 border border-${props.color}-500`;
		}
		if (props.type === 'text') {
			return `text-${props.color}-500 hover:bg-${props.color}-300`;
		}
	};

	return (
		<button
			onClick={props.onClick}
			className={`rounded w-full ${
				props.className
			} text-center py-1 mt-1 focus:outline-none ${getStyles()} transition-colors ease-in-out`}
		>
			{props.children}
		</button>
	);
};
