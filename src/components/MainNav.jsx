import { NavLink, useLocation } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
import { MdTask } from 'react-icons/md';
import { MdOutlinePendingActions } from 'react-icons/md';

const MainNav = () => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<nav>
			<ul className="flex flex-col gap-6">
				<li>
					<NavLink
						to="/tasks"
						className={`flex items-center gap-3 text-lg font-medium p-5 transition-all duration-300 ${
							path === '/tasks'
								? 'bg-black text-slate-100 hover:bg-black'
								: 'hover:bg-gray-200 text-black'
						} rounded-xl`}
					>
						<FaTasks
							className={`w-6 h-6 ${
								path === '/tasks' ? 'text-yellow-400' : ''
							}`}
						/>
						<span>All tasks</span>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/pending-tasks"
						className={`flex items-center gap-3 text-lg font-medium p-5 transition-all duration-300 ${
							path === '/pending-tasks'
								? 'bg-black text-slate-100 hover:bg-black'
								: 'hover:bg-gray-200 text-black'
						} rounded-xl`}
					>
						<MdOutlinePendingActions
							className={`w-7 h-7 ${
								path === '/pending-tasks' ? 'text-yellow-400' : 'text-black'
							}`}
						/>
						<span>Pending tasks</span>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/completed-tasks"
						className={`flex items-center gap-3 text-lg font-medium p-5 transition-all duration-300 ${
							path === '/completed-tasks'
								? 'bg-black text-slate-100 hover:bg-black'
								: 'hover:bg-gray-200 text-black'
						} rounded-xl`}
					>
						<MdTask
							className={`w-7 h-7 ${
								path === '/completed-tasks' ? 'text-yellow-400' : 'text-black'
							}`}
						/>
						<span>Completed tasks</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
