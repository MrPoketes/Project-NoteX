import React from 'react';
import { EditableText } from '../EditableText/EditableText';
import { Draggable } from 'react-beautiful-dnd';
interface CardItemInterface {
	text: string;
	index: number;
	draggableId: any;
}
export const CardItem: React.FC<CardItemInterface> = props => {
	return (
		<Draggable
			key={props.draggableId}
			draggableId={props.draggableId.toString()}
			index={props.draggableId}
		>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="bg-white my-2"
				>
					<EditableText className="ml-2">{props.text}</EditableText>
				</div>
			)}
		</Draggable>
	);
};
