
import { NavLink,Routes,Route, BrowserRouter } from 'react-router-dom';

import HomePage from '@containers/HomePage';
import Header from '../../components/Header';
import routesConfig from '../../routes/routesConfig';
import styles from './App.module.css'

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Routes>
				{routesConfig.map((route, index) => (
					<Route 
						key={index} 
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</div>
	)
}

export default App;
