export interface CardItemInterface {
	text: string;
	index: number;
	draggableId: number;
}
export interface CardInterface {
	title: string;
	data: CardDataInterface[];
	index: number;
}
export interface CardDataInterface {
	itemLabel: string;
	itemText: string;
}
