/* eslint-disable no-mixed-spaces-and-tabs */
import Navbar from "./components/Navbar";
import logoImage from "./assets/images/logo.png";
import { logoName1, logoName2, navMenu, handleClick, currentPage, isShowLogin } from "./helpers/const";

function App() {
	return (
		<div>
			<Navbar logo={logoImage} logoName1={logoName1} logoName2={logoName2} menus={navMenu} handleClick={handleClick} currentPage={currentPage} isShowLogin={isShowLogin} />
		</div>
	);
}

export default App;