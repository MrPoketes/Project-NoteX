import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { CardItem } from './CardItem';
import { EditableText } from '../EditableText/EditableText';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
interface CardInterface {
	title: string;
	data: CardDataInterface[];
	index: number;
}
interface CardDataInterface {
	itemLabel: string;
	itemText: string;
}
export const Card: React.FC<CardInterface> = props => {
	/**
	 * @param cardItems type CardDataInterface[]
	 * States for cardItems
	 */
	const [cardItems, setItems] = useState(props.data);

	const handleAddItem = (): void => {
		setItems([...cardItems, { itemLabel: '', itemText: '' }]);
	};
	/**
	 * Utility function for reordering the sequence of cards after drag and drop
	 */
	const reorder = (
		list: CardDataInterface[],
		startIndex: number,
		endIndex: number
	): CardDataInterface[] => {
		const result = list;
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	const handleDragEnd = (result): void => {
		/**
		 * If the item was dropped outside
		 */
		if (!result.destination) {
			return;
		}
		/**
		 * If the item was dropped at the same place
		 */
		if (result.source.index === result.destination.index) {
			return;
		}
		const items = reorder(cardItems, result.source.index, result.destination.index);
		setItems(items);
	};

	return (
		<DragDropContext onDragEnd={result => handleDragEnd(result)}>
			<div className="bg-gray-200 h-full p-2 w-2/12 mr-8 rounded">
				<EditableText className="text-lg font-medium pl-1" isTitle={true}>
					{props.title}
				</EditableText>
				<div>
					<Droppable droppableId={props.title}>
						{provided => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								{cardItems.map((data, i) => (
									<CardItem
										key={data.itemText}
										text={data.itemText}
										index={props.index}
										draggableId={i}
									/>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Button onClick={() => handleAddItem()}>Add card</Button>
				</div>
			</div>
		</DragDropContext>
	);
};
