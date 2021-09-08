import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/recipe-app-logo.png" alt="logo" width={160} height={22} />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</nav>
	);
};

export default Navbar;
