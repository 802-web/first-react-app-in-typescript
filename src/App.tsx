import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
	message?: string;
}
const App: React.FunctionComponent<AppProps> = ({ message }) => {
	return (
		<div>
			<CounterWithReducer />
		</div>
	);
};

App.defaultProps = {
	message: 'Hello DEFALT',
};
export default App;
