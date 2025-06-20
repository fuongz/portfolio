import { IoIosHeart } from "react-icons/io";
import { ThemeSwitch } from "../../Shared";

const Copyright: React.FC = () => {
	return (
		<div className="mt-4 sm:mt-24 border-t border-zinc-100 dark:border-zinc-800 flex justify-between w-full items-start gap-4 pt-4">
			<p className="text-zinc-400 text-sm">
				Built with <IoIosHeart className="inline-block text-red-500" /> by
				fuongz.
			</p>
			<ThemeSwitch />
		</div>
	);
};

export { Copyright };
