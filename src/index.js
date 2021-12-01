import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './app/store';
// .evn
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
