import { useState } from 'react';

const AddTask = ({ isOpen, onClose, onAddTask }) => {
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	});

	const formatDate = (date) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return new Date(date).toLocaleDateString('en-US', options);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewTask({ ...newTask, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newEditedTask = {
			...newTask,
			dueDate: formatDate(newTask.dueDate),
		};
		onAddTask(newEditedTask);
		setNewTask({ title: '', description: '', dueDate: '' });
	};

	return (
		isOpen && (
			<div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
				<div className="bg-white p-6 rounded shadow-lg w-96">
					<h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="title"
							placeholder="Title"
							value={newTask.title}
							onChange={handleChange}
							className="border-b-2 w-full mb-4 py-2 px-3"
							required
						/>
						<textarea
							name="description"
							placeholder="Description"
							value={newTask.description}
							onChange={handleChange}
							className="border-b-2 w-full mb-4 py-2 px-3"
							required
						></textarea>
						<input
							type="date"
							name="dueDate"
							value={newTask.dueDate}
							onChange={handleChange}
							className="border-b-2 w-full mb-4 py-2 px-3"
							required
						/>
						<div className="flex justify-end mt-4">
							<button
								type="button"
								className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 mr-2"
								onClick={onClose}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="border-none px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white"
							>
								Add Task
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	);
};

export default AddTask;
