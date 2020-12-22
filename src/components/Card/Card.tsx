import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { CardItem } from './CardItem';
import { EditableText } from '../EditableText/EditableText';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
interface CardInterface {
	title: string;
	data: string[];
	label: string;
	index: number;
}
export const Card: React.FC<CardInterface> = props => {
	const [cardItems, setItems] = useState(props.data);

	const handleAddItem = (): void => {
		setItems([...cardItems, '']);
	};
	return (
		<DragDropContext>
			<div className="bg-gray-200 h-full p-2 w-2/12 mr-8 rounded">
				<EditableText className="text-lg font-medium pl-1" isTitle={true}>
					{props.title}
				</EditableText>
				<div>
					<Droppable droppableId={props.index}>
						{provided => (
							<ul {...provided.droppableId} ref={provided.innerRef}>
								{cardItems.map((data, i) => (
									<CardItem key={i} text={data} index={i} />
								))}
							</ul>
						)}
					</Droppable>
					<Button onClick={() => handleAddItem()}>Add card</Button>
				</div>
			</div>
		</DragDropContext>
	);
};
