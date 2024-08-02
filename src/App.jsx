import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import PageNotFound from './components/PageNotFound';
import CompletedTasksPage from './pages/CompletedTasksPage';
import PendingTasksPage from './pages/PendingTasksPage';

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

				<Route
					path="completed-tasks"
					element={
						<AppLayout sidebar={true}>
							<CompletedTasksPage />
						</AppLayout>
					}
				/>

				<Route
					path="pending-tasks"
					element={
						<AppLayout sidebar={true}>
							<PendingTasksPage />
						</AppLayout>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
