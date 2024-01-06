import React, { useState } from "react";
import progress from "../progress.svg";
import plus from "../plus.svg";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoIosFunnel } from "react-icons/io";

const data = [
	{
		month: "Jan 2023",
		status: "PENDING",
		completion: 20,
		unit: "Business Unit 1",
	},
	{
		month: "Feb 2023",
		status: "APPROVED",
		completion: 30,
		unit: "Business Unit 1",
	},
	{
		month: "Mar 2023",
		status: "INCOMPLETE",
		completion: 50,
		unit: "Business Unit 1",
	},
];
const Tracker = () => {
	const [filteredData, setFilteredData] = useState(data);

	const handleSearch = (event) => {
		const value = event.target.value.toLowerCase();
		const filtered = data.filter(
			(item) =>
				item.unit.toLowerCase().includes(value) ||
				item.status.toLowerCase().includes(value) ||
				item.month.toLowerCase().includes(value)
		);
		setFilteredData(filtered);
	};

	return (
		<div className="tracker-main-section">
			<div className="d-flex" style={{ gap: "14px" }}>
				<div
					className="d-flex"
					style={{
						gap: "16px",
						alignItems: "start",
						padding: "20px",
						border: "1px solid #f3f3f3",
						borderRadius: "8px",
					}}
				>
					<p
						className="d-flex-column"
						style={{ margin: "0", alignItems: "start", gap: "4px" }}
					>
						<span>Pending Trackers</span>
						<span style={{ fontSize: "28px", lineHeight: "42px" }}>45/60</span>
					</p>
					<img
						src={progress}
						style={{
							padding: "6px",
							background: "#f3f3f3",
							borderRadius: "8px",
						}}
					></img>
				</div>
				<div
					className="d-flex"
					style={{
						gap: "16px",
						alignItems: "start",
						padding: "20px",
						border: "1px solid #f3f3f3",
						borderRadius: "8px",
					}}
				>
					<p
						className="d-flex-column"
						style={{ margin: "0", alignItems: "start", gap: "4px" }}
					>
						<span>Pending Reviews</span>
						<span style={{ fontSize: "28px", lineHeight: "42px" }}>3</span>
					</p>
					<img
						src={plus}
						style={{
							padding: "6px",
							background: "#f3f3f3",
							borderRadius: "8px",
						}}
					></img>
				</div>
			</div>
			<input
				type="search"
				placeholder="Search for a business unit"
				onChange={handleSearch}
				style={{ marginTop: "31px" }}
			/>
			<div
				style={{
					display: "flex",
					padding: "24px",
					justifyContent: "space-between",
				}}
			>
				<div className="tracker-row">
					<div>
						Month <FaLongArrowAltDown />
					</div>
					<div>Jan 2023</div>
					<div>Feb 2023</div>
					<div>Mar 2023</div>
				</div>
				<div className="tracker-row">
					<div>
						Status <FaLongArrowAltDown />
					</div>
					<div style={{ fontSize: "10px" }}>PENDING APPROVAL (1/12)</div>
					<div style={{ fontSize: "10px" }}>APPROVED (2/12)</div>
					<div style={{ fontSize: "10px" }}>PENDING (4/12)</div>
				</div>
				<div className="tracker-row">
					<div>
						Completion% <FaLongArrowAltDown />
					</div>
					<div>20%</div>
					<div>30%</div>
					<div>50%</div>
				</div>
				<div className="tracker-row">
					<div>
						Business Unit <IoIosFunnel />
					</div>
					<div>Business Unit 1</div>
					<div>Business Unit 1</div>
					<div>Business Unit 1</div>
				</div>
			</div>
			{/* <table style={{ width: "100%", padding: "24px" }}>
				<thead>
					<tr>
						<th>Month</th>
						<th>Status</th>
						<th>Completion %</th>
						<th>Business Unit</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item, index) => (
						<tr key={index}>
							<td>{item.month}</td>
							<td>{item.status}</td>
							<td>{item.completion}%</td>
							<td>{item.unit}</td>
						</tr>
					))}
				</tbody>
			</table> */}
		</div>
	);
};
export default Tracker;
