const logoName1 = "D'Coffee";
const logoName2 = "Shop";
const isShowLogin = false;
const navMenu = [
	{
		page: "home",
		name: "Home",
	},
	{
		page: "menu",
		name: "Menu",
	},
	{
		page: "services",
		name: "Services",
	},
	{
		page: "about",
		name: "About us",
	},
	{
		page: "contact",
		name: "Contact us",
	},
];

const path = String(window.location.pathname.replace("/", ""));
let currentPage = "home";

if (path === "") {
	currentPage = "home";
} else {
	currentPage = path;
}

const handleClick = () => {
	const list = document.querySelector("ul");
	const icon = document.getElementById("btn-icon");
	if (icon.classList.contains("fa-bars")) {
		icon.classList.add("fa-xmark");
		icon.classList.remove("fa-bars");
		list.classList.add("opacity-100");
	} else {
		icon.classList.add("fa-bars");
		icon.classList.remove("fa-xmark");
		list.classList.remove("opacity-100");
	}
};

export { logoName1, logoName2, navMenu, handleClick, currentPage, isShowLogin };
