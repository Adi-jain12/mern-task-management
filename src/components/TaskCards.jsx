import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

function TaskCards({ tasks, setTasks }) {
	const [editTaskId, setEditTaskId] = useState(null);
	const [editedTask, setEditedTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	});

	const markAsDoneButton = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
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
		setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
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
				<div key={task.id} className="max-w-sm rounded-2xl p-6 bg-yellow-300">
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
									className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
									onClick={saveTask}
								>
									Save
								</button>
								<button
									className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
									onClick={() => setEditTaskId(null)}
								>
									Cancel
								</button>
							</div>
						</div>
					) : (
						<div>
							<h3
								className={`text-xl font-semibold mb-2 ${
									task.isDone ? 'line-through text-gray-400' : ''
								}`}
							>
								{task.title}
							</h3>
							<p
								className={`text-gray-600 mb-4 ${
									task.isDone ? 'line-through text-gray-400' : ''
								}`}
							>
								{task.description}
							</p>
							<div className="flex items-center mb-4">
								<span
									className={`text-sm ${
										task.isDone ? 'line-through text-gray-400' : ''
									}`}
								>
									<span className="font-semibold">Due Date : </span>
									{task.dueDate}
								</span>
							</div>
							<div className="flex items-center justify-between mb-4">
								<button
									className={`flex-1 px-4 py-2 rounded-lg ${
										task.isDone
											? 'bg-green-500 text-white hover:bg-green-600'
											: 'bg-red-500 text-white hover:bg-red-600'
									}`}
									onClick={() => markAsDoneButton(task.id)}
								>
									{task.isDone ? 'Mark as Not Done' : 'Mark as Done'}
								</button>
								{!task.isDone && (
									<button
										className="px-3 py-2 text-white bg-black hover:bg-gray-900 rounded-lg ml-2 text-xl"
										onClick={() => startEditing(task)}
									>
										<AiFillEdit />
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default TaskCards;
