import MainNav from '../components/MainNav';
import { CgGoogleTasks } from 'react-icons/cg';

const Sidebar = () => {
	return (
		<aside className="p-6 border-r border-gray-100 flex flex-col gap-12">
			<div className="flex items-center justify-center text-[60px]">
				<CgGoogleTasks />
			</div>
			<MainNav />

			{/* <Logo />
      <MainNav />
      <Uploader /> */}
		</aside>
	);
};

export default Sidebar;
