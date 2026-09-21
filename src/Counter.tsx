import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
	const [value, setValue] = useState<number>(0);

	const incre = () => {
		setValue((prevState) => prevState + 1);
	};
	const decre = () => {
		setValue((prevState) => prevState - 1);
	};

	const renderTimes = useRef<number>(0);
	useEffect(() => {
		renderTimes.current = renderTimes.current + 1;
	});
	return (
		<div>
			<div>value: {value}</div>
			<button onClick={incre}>+1</button>
			<button onClick={decre}>-1</button>
			<div>render times{renderTimes.current}</div>
		</div>
	);
};

export default Counter;
