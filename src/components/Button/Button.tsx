import React from 'react';

export function Button(props) {
	return (
		<button
			onClick={props.onClick}
			className="ml-2 text-left my-2 focus:outline-none"
		>
			{props.children}
		</button>
	);
}
