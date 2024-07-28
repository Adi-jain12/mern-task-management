import { NavLink } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

const MainNav = () => {
	return (
		<nav>
			<ul className="flex flex-col gap-2">
				<li>
					<NavLink
						to="/tasks"
						className="flex items-center gap-3 text-white text-lg font-medium p-5 transition-all duration-300 bg-gray-900 hover:bg-black hover:text-slate-100 rounded-xl"
					>
						<FaTasks className="w-6 h-6 text-white transition-all duration-300" />
						<span>All tasks</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
