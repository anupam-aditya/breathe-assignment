import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import {
	MdOutlineBarChart,
	MdPieChartOutlined,
	MdOutlineLogout,
} from "react-icons/md";
import { signOut } from "firebase/auth";
import { PiSquaresFour } from "react-icons/pi";
import reporting from "../reporting.png";
import material from "../Materials.png";
import supplier from "../Suppliers.png";
import analytics from "../Analytics.png";
import targets from "../Targets.png";
import breathe_logo from "../breathe_logo.png";
import { useState } from "react";

const SideNav = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const sidebarToggler = (e) => {
		document.querySelectorAll(".sidebar-icons").forEach((element) => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
	};
	const logoutHandler = async (data) => {
		const logout = await signOut(props.auth);
		console.log(logout);
		props.setIsloginSuccessFul((prevState) => !prevState);
	};
	const navToggler = () => {
		setIsOpen(!isOpen);
	};

	const sidebarStyle = {
		width: isOpen ? "158px" : "0",
		overflow: "hidden",
		transition: "width 0.5s ease",
		padding: isOpen ? "24px 24px 40px 24px" : "0",
	};

	const logoSectionStyle = {
		display: "flex",
		alignItems: "center",
	};

	const mainNavStyle = {};

	return (
		<div style={sidebarStyle} className="sidenav">
			<div style={logoSectionStyle} className="logo-section">
				<img className="sidenav-logo" src={breathe_logo} alt="Logo" />
				{isOpen ? (
					<FaCircleChevronLeft
						className="sidenav-toggler"
						onClick={navToggler}
					/>
				) : (
					<FaCircleChevronRight
						className="sidenav-toggler close-toggler"
						onClick={navToggler}
					/>
				)}
			</div>
			<div style={mainNavStyle} className="main-nav">
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<MdOutlineBarChart />
					Dashboard
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<PiSquaresFour />
					Entity Manager
				</p>
				<p className="sidebar-icons active" onClick={sidebarToggler}>
					<MdPieChartOutlined />
					Data Manager
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<img className="sidebar-icon" src={reporting}></img>Reporting
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<img className="sidebar-icon" src={material}></img>Materiality
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<img className="sidebar-icon" src={supplier}></img>Suppliers
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<img className="sidebar-icon" src={analytics}></img>Analytics
				</p>
				<p className="sidebar-icons" onClick={sidebarToggler}>
					<img className="sidebar-icon" src={targets}></img>Targets
				</p>
				<p className="sidebar-icons" onClick={logoutHandler}>
					<MdOutlineLogout /> Logout
				</p>
			</div>
		</div>
	);
};
export default SideNav;
