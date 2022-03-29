interface Inputdefined {
	className: string;
	name: string;
	placeholder: string;
	callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
	keyUpCallback?: () => void;
	description?: string | undefined;
}

export default function RegisterAndLoginInput(props: Inputdefined) {
	return (
		<>
			<input
				type="text"
				className={props.className}
				name={props.name}
				placeholder={props.placeholder}
				maxLength={10}
				onChange={props.callback}
				onKeyUp={props.keyUpCallback}
			/>
			<label htmlFor={props.description}>{props.description}</label>
		</>
	);
}
