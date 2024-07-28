import { CgGoogleTasks } from 'react-icons/cg';

const HomePage = () => {
	return (
		<div className="flex flex-col items-center justify-center my-10 px-4 text-center sm:my-16">
			<span className="mb-8 text-4xl font-bold">
				Task Management Website
				<br />
				<span className="text-slate-100 text-2xl font-semibold">
					Keep Track of Your Daily Tasks
				</span>
			</span>

			<CgGoogleTasks className="mt-12 text-[100px]" />
		</div>
	);
};

export default HomePage;
