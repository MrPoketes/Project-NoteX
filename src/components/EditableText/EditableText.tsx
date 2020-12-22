import React, { KeyboardEvent, FormEvent, useState } from 'react';

interface EditableInterface {
	children: string;
	className: string;
	isTitle?: boolean;
}
export const EditableText: React.FC<EditableInterface> = props => {
	/**
	 *
	 */
	const [edit, changeEdit] = useState(false);
	/**
	 *
	 */
	const [text, setText] = useState(props.children);
	/**
	 *
	 */
	const inputStyles =
		'outline-none ring-2 ring-red-300 bg-white bg-opacity-75 rounded';

	const handleFocus = (): void => {
		changeEdit(false);
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		if (event.key === 'Enter') {
			handleFocus();
		}
	};

	const handleTextChange = (
		event: FormEvent<HTMLTextAreaElement> | FormEvent<HTMLInputElement>
	): void => {
		setText(event.currentTarget.value);
	};

	if (edit) {
		if (props.isTitle) {
			return (
				<div>
					<input
						className={`${props.className} ${inputStyles}`}
						type="text"
						value={text}
						onChange={event => handleTextChange(event)}
						onKeyDown={event => handleKeyDown(event)}
						onBlur={() => handleFocus()}
						autoFocus
					/>
				</div>
			);
		} else {
			return (
				<div className="my-2">
					<textarea
						className={`${props.className} ${inputStyles} w-3/4`}
						style={{ overflow: 'auto' }}
						value={text}
						onChange={event => handleTextChange(event)}
						onKeyDown={event => handleKeyDown(event)}
						onBlur={() => handleFocus()}
						autoFocus
					/>
				</div>
			);
		}
	}
	const paddingLi = text === '' ? 'py-5' : 'py-2';

	return (
		<div className={`w-full ${paddingLi}`} onClick={() => changeEdit(true)}>
			<p className={`${props.className} transition ease-in-out break-words`}>
				{text}
			</p>
		</div>
	);
};
