import Sidebar from './Sidebar.jsx';
import CreateUser from '../components/CreateUser.jsx';

const AppLayout = ({ sidebar, children }) => {
	return (
		<div>
			{sidebar ? (
				<div className="grid grid-cols-[20rem_1fr] h-screen">
					<Sidebar />
					<main className="bg-slate-100 p-16 pb-24 overflow-scroll">
						<div className="max-w-[120rem] mx-auto flex flex-col gap-8">
							{children}
						</div>
					</main>
				</div>
			) : (
				<div className="grid grid-cols-[1fr_1fr] h-screen">
					<main className="bg-yellow-400 p-16 pb-24">
						<div className="max-w-[120rem] mx-auto flex flex-col gap-8">
							{children}
						</div>
					</main>

					<CreateUser />
				</div>
			)}
		</div>
	);
};

export default AppLayout;
