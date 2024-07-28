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

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
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

	return (
		<>
			<div className="flex flex-col gap-8">
				<span className="text-xl mb-4">
					<p className="text-gray-500">Hello, {username}!</p>
					<p className="text-3xl font-bold">
						You&apos;ve got{' '}
						{totalTasks === 1 ? `${totalTasks} task ` : `${totalTasks} tasks `}
						remaining
					</p>
				</span>
				<div className="flex items-center justify-between border border-slate-200 rounded-lg p-4 shadow-md bg-slate-100">
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
					<TaskCards tasks={tasks} setTasks={setTasks} />
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
