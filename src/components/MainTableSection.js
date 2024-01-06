import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { BiBuilding } from "react-icons/bi";
import Profile from "./Profile";
import Tracker from "./Tracker";
import DataEntry from "./DataEntry";

const MainTableSection = (props) => {
	const [tracker, setTracker] = useState("tracker");
	const trackerToggler = (e) => {
		document.querySelectorAll(".data-manager-text").forEach((element) => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
		if (e.target.innerText === "Data Entry") {
			setTracker("tracker");
		} else {
			setTracker(null);
		}
	};

	return (
		<div
			style={{
				background: "white",
				color: "#000",
				display: "flex",
				flexDirection: "column",
				flex: "1",
				alignItems: "start",
			}}
		>
			<div className="main-table-section">
				<Profile />
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", gap: "48px" }}>
						<p className="data-manager-text active" onClick={trackerToggler}>
							<BiBuilding />
							Data Entry
						</p>
						<p className="data-manager-text" onClick={trackerToggler}>
							<BiBuilding />
							Tracker
						</p>
					</div>
					<div style={{ display: "flex", gap: "16px" }}>
						<p
							style={{
								display: "flex",
								gap: "12px",
								margin: "0px",
								alignItems: "center",
							}}
						>
							For:{" "}
							<span
								style={{
									color: "#000",
									borderRadius: "4px",
									padding: "8px 16px",
									border: "1px solid #C9C9C9",
								}}
							>
								FY 2023-24 <IoChevronDown />
							</span>
						</p>
						{tracker ? (
							<button
								style={{
									background: "#2E9844",
									borderRadius: "4px",
									padding: "8px 16px",
									color: "white",
									border: "1px solid",
									outline: "none",
									fontSize: "15px",
									fontWeight: "700",
								}}
							>
								Submit For Approval
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			{tracker ? <DataEntry /> : <Tracker />}
		</div>
	);
};
export default MainTableSection;
