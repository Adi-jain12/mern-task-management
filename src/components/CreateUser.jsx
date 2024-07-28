import { useState } from 'react';
import { useNavigate } from 'react-router';

const CreateUser = () => {
	const [username, setUsername] = useState('');
	const [details, setDetails] = useState('');
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (!username) return;

		localStorage.setItem('name', username);
		setDetails(username);

		navigate(`/tasks`);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center gap-2"
		>
			<p className="mb-4 text-xl text-stone-600">
				👋 Welcome! Please start by telling us your name:
			</p>

			<input
				type="text"
				placeholder="Your full name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className="input mb-8 w-72 p-2 text-md border-b-2 border-yellow-400"
			/>

			{username !== '' && (
				<div>
					<button className="py-2 px-4 rounded-3xl text-white bg-gray-900 hover:bg-gray-800">
						Start adding tasks
					</button>
				</div>
			)}
		</form>
	);
};

export default CreateUser;
