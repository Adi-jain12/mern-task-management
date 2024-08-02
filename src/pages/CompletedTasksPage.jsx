import { useEffect, useState } from 'react';
import TaskCards from '../components/TaskCards';
import Message from '../components/Message';

const CompletedTasksPage = () => {
	const storedTasks = localStorage.getItem('tasks');
	const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const handleMarkAsNotDone = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isDone: false } : task
			)
		);
	};

	const handleDeleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	const completedTasks = tasks.filter((task) => task.isDone === true);

	return (
		<>
			<div className="flex flex-col gap-8">
				<div className="flex items-center justify-between border border-slate-200 rounded-lg p-4 mt-2 shadow-md bg-slate-100">
					<span className="text-3xl font-bold ml-4 ">Completed tasks</span>
				</div>

				{completedTasks.length === 0 ? (
					<Message>Your completed tasks list is empty!</Message>
				) : (
					<TaskCards
						tasks={completedTasks}
						setTasks={setTasks}
						markAsDoneButton={handleMarkAsNotDone}
						onDeleteTask={handleDeleteTask}
					/>
				)}
			</div>
		</>
	);
};

export default CompletedTasksPage;
