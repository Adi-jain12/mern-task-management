import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import TaskCards from '../components/TaskCards';
import AddTask from '../components/AddTask';
import Message from '../components/Message';

const TasksPage = () => {
	const username = localStorage.getItem('name');
	const storedTasks = localStorage.getItem('tasks');
	const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
	const [tasks, setTasks] = useState(initialTasks);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const totalTasks = tasks.length;
	const pendingTasks = tasks.filter((task) => task.isDone === false).length;
	const completedTasks = tasks.filter((task) => task.isDone === true).length;

	const sortByDate = (tasks) => {
		return tasks
			.slice()
			.sort(
				(first, second) => new Date(first.dueDate) - new Date(second.dueDate)
			);
	};

	useEffect(() => {
		const sortedTasks = sortByDate(tasks);
		setTasks(sortedTasks);
		localStorage.setItem('tasks', JSON.stringify(sortedTasks));
	}, [tasks]);

	const addTask = (newTask) => {
		const newTaskItem = {
			id: tasks.length + 1,
			...newTask,
			isDone: false,
		};

		setTasks([...tasks, newTaskItem]);
		setIsModalOpen(false);
	};

	const handleMarkAsDone = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	};

	const handleDeleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<>
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<span className="flex flex-col gap-1 mb-4">
						<p className="text-gray-500 text-2xl">
							Hello, {username || 'User'}!
						</p>
						<p className="text-3xl font-bold">
							Explore the full overview of your tasks
						</p>
					</span>
					<div className="flex space-x-4">
						<button className="flex flex-col items-center border-b-4 border-gray-600 bg-slate-200 w-24 h-20 text-black py-2 px-4 rounded-lg shadow-md">
							<span className="mb-1 text-gray-800 text-sm font-semibold">
								Total
							</span>
							<span className="text-2xl font-bold">{totalTasks}</span>
						</button>
						<button className="flex flex-col items-center border-b-4 border-yellow-500 bg-slate-200 w-24 h-20 text-black py-2 px-4 rounded-lg shadow-md">
							<span className="mb-1 text-gray-800 font-semibold text-sm">
								Pending
							</span>
							<span className="text-2xl font-bold">{pendingTasks}</span>
						</button>
						<button className="flex flex-col items-center border-b-4 border-green-600 bg-slate-200 w-24 h-20 text-black py-2 px-4 rounded-lg shadow-md">
							<span className="mb-1 text-gray-800 font-semibold text-sm">
								Completed
							</span>
							<span className="text-2xl font-bold">{completedTasks}</span>
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between border border-slate-200 rounded-lg p-4 mt-6 shadow-md bg-slate-100">
					<span className="text-3xl font-bold ml-4 ">All tasks</span>
					<div className="mx-6">
						<button
							className="flex items-center border-none px-5 py-3 font-semibold rounded-xl bg-black text-white"
							onClick={() => setIsModalOpen(true)}
						>
							<AiOutlinePlus className="mr-2 text-xl" />
							Add task
						</button>
					</div>
				</div>

				{tasks.length === 0 ? (
					<Message>
						Welcome! You have no tasks yet. Click the Add task button to get
						started!
					</Message>
				) : (
					<TaskCards
						tasks={tasks}
						setTasks={setTasks}
						markAsDoneButton={handleMarkAsDone}
						onDeleteTask={handleDeleteTask}
					/>
				)}
			</div>

			<div>
				{isModalOpen && (
					<AddTask
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						onAddTask={addTask}
					/>
				)}
			</div>
		</>
	);
};

export default TasksPage;
