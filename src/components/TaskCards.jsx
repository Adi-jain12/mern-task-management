import { useState } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { FaCheckCircle, FaRegCircle, FaEdit } from 'react-icons/fa';

function TaskCards({ tasks, setTasks, markAsDoneButton, onDeleteTask }) {
	const [editTaskId, setEditTaskId] = useState(null);
	const [editedTask, setEditedTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	});

	const formatDate = (date) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return new Date(date).toLocaleDateString('en-US', options);
	};

	const startEditing = (task) => {
		setEditTaskId(task.id);
		setEditedTask({
			title: task.title,
			description: task.description,
			dueDate: task.dueDate,
		});
	};

	const handleEditChange = (e) => {
		const { name, value } = e.target;
		setEditedTask((prevTask) => ({
			...prevTask,
			[name]: name === 'dueDate' ? formatDate(value) : value,
		}));
	};

	const saveTask = () => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === editTaskId ? { ...task, ...editedTask } : task
			)
		);
		setEditTaskId(null);
		setEditedTask({ title: '', description: '', dueDate: '' });
	};

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{tasks.map((task) => (
				<div
					key={task.id}
					className={`max-w-sm rounded-2xl p-6 ${
						task.isDone ? 'bg-green-300' : 'bg-yellow-300'
					}`}
				>
					{editTaskId === task.id ? (
						<div>
							<input
								type="text"
								name="title"
								value={editedTask.title}
								onChange={handleEditChange}
								className="border-b-2 w-full mb-4 py-2 px-3"
							/>
							<textarea
								name="description"
								value={editedTask.description}
								onChange={handleEditChange}
								className="border-b-2 w-full mb-4 py-2 px-3"
							></textarea>
							<input
								type="date"
								name="dueDate"
								value={editedTask.dueDate}
								onChange={handleEditChange}
								className="border-b-2 w-full mb-4 py-2 px-3"
							/>
							<div className="flex mt-4 justify-between items-center ">
								<button
									className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700"
									onClick={saveTask}
								>
									Update
								</button>
								<button
									className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
									onClick={() => setEditTaskId(null)}
								>
									Cancel
								</button>
							</div>
						</div>
					) : (
						<div>
							<h3
								className={`text-xl font-bold mb-2 ${
									task.isDone ? 'line-through text-gray-500' : ''
								}`}
							>
								{task.title}
							</h3>
							<p
								className={`text-md text-gray-600 mb-4 ${
									task.isDone ? 'line-through text-gray-500' : ''
								}`}
							>
								{task.description}
							</p>
							<div className="flex items-center mb-6">
								<span
									className={`text-sm ${
										task.isDone ? 'line-through text-gray-500' : ''
									}`}
								>
									<span className="font-semibold">Due Date : </span>
									{task.dueDate}
								</span>
							</div>
							<div className="flex items-center justify-between mb-4">
								<button
									className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
										task.isDone
											? 'bg-red-600 text-white hover:bg-red-700 font-semibold'
											: 'bg-green-600 text-white hover:bg-green-700 font-semibold'
									}`}
									onClick={() => markAsDoneButton(task.id)}
								>
									{task.isDone ? (
										<>
											<FaCheckCircle /> Mark as Not Done
										</>
									) : (
										<>
											<FaRegCircle /> Mark as Done
										</>
									)}
								</button>
								<div className="flex">
									{!task.isDone && (
										<button
											className="mr-6 text-2xl"
											onClick={() => startEditing(task)}
										>
											<FaEdit />
										</button>
									)}

									<button
										className="text-xl"
										onClick={() => onDeleteTask(task.id)}
									>
										<FaTrash />
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default TaskCards;
