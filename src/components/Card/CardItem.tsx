import React from 'react';
import { EditableText } from '../EditableText/EditableText';
import { Draggable } from 'react-beautiful-dnd';
interface CardItemInterface {
	text: string;
	index: number;
}
export const CardItem: React.FC<CardItemInterface> = props => {
	return (
		<Draggable index={props.index} draggableId={props.index}>
			{provided => (
				<li
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="bg-white my-2"
				>
					<EditableText className="ml-2">{props.text}</EditableText>
				</li>
			)}
		</Draggable>
	);
};
