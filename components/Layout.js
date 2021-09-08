import Navbar from './Navbar';
import Footer from './Footer';

// include navbar and footer in Layout
const Layout = ({ children }) => {
	return (
		<div className="content">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
