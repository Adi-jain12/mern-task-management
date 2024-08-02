import { useEffect, useState } from 'react';
import TaskCards from '../components/TaskCards';
import Message from '../components/Message';

const PendingTasksPage = () => {
	const storedTasks = localStorage.getItem('tasks');
	const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const handleMarkAsDone = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isDone: true } : task
			)
		);
	};

	const handleDeleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	const pendingTasks = tasks.filter((task) => !task.isDone);

	return (
		<>
			<div className="flex flex-col gap-8">
				<div className="flex items-center justify-between border border-slate-200 rounded-lg p-4 mt-2 shadow-md bg-slate-100">
					<span className="text-3xl font-bold ml-4">Pending tasks</span>
				</div>

				{pendingTasks.length === 0 ? (
					<Message>You have no pending tasks!</Message>
				) : (
					<TaskCards
						tasks={pendingTasks}
						setTasks={setTasks}
						markAsDoneButton={handleMarkAsDone}
						onDeleteTask={handleDeleteTask}
					/>
				)}
			</div>
		</>
	);
};

export default PendingTasksPage;
