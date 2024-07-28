import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import PageNotFound from './components/PageNotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<AppLayout sidebar={false}>
							<HomePage />
						</AppLayout>
					}
				/>
				<Route
					path="tasks"
					element={
						<AppLayout sidebar={true}>
							<TasksPage />
						</AppLayout>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
