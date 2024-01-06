import React from "react";
import { BsShare } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const DataEntry = () => {
	return (
		<div style={{ width: "100%" }}>
			<table style={{ width: "100%" }}>
				<tbody>
					<tr className="table-row">
						<th>
							<input type="checkbox" className="table-input" />
						</th>
						<th>ASSESSMENT TITLE</th>
						<th>TYPE</th>
						<th>NO. OF SUPPLIERS</th>
						<th>SCORE</th>
						<th>RISK CLASSIFICATION</th>
						<th>STATUS</th>
						<th>RESULT</th>
						<th>ACTIONS</th>
					</tr>
					<tr className="table-row">
						<td>
							<input type="checkbox" className="table-input" />
						</td>
						<td>Assessment 1</td>
						<td>BRSR</td>
						<td>20</td>
						<td>-</td>
						<td>
							<span style={{ color: "#f1c40f" }}>Medium</span>
						</td>
						<td>Pending</td>
						<td>-</td>
						<td className="table-actions">
							<BsShare />
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr className="table-row">
						<td>
							<input type="checkbox" className="table-input" />
						</td>
						<td>Assessment 2</td>
						<td>BRSR</td>
						<td>25</td>
						<td>98</td>
						<td>
							<span style={{ color: "#f1c40f" }}>Low</span>
						</td>
						<td>Complete</td>
						<td>View</td>
						<td className="table-actions">
							<BsShare />
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr className="table-row">
						<td>
							<input type="checkbox" className="table-input" />
						</td>
						<td>Assessment 3</td>
						<td>BRSR</td>
						<td>35</td>
						<td>22</td>
						<td>
							<span style={{ color: "#f1c40f" }}>High</span>
						</td>
						<td>Complete</td>
						<td>View</td>
						<td className="table-actions">
							<BsShare />
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr className="table-row">
						<td>
							<input type="checkbox" className="table-input" />
						</td>
						<td>Assessment 3</td>
						<td>Custom</td>
						<td>49</td>
						<td>23</td>
						<td>
							<span style={{ color: "#f1c40f" }}>Medium</span>
						</td>
						<td>Complete</td>
						<td>View</td>
						<td className="table-actions">
							<BsShare />
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr className="table-row">
						<td>
							<input type="checkbox" className="table-input" />
						</td>
						<td>Assessment 3</td>
						<td>Custom</td>
						<td>100</td>
						<td>42</td>
						<td>
							<span style={{ color: "#f1c40f" }}>Medium</span>
						</td>
						<td>Complete</td>
						<td>View</td>
						<td className="table-actions">
							<BsShare />
							<RiDeleteBinLine />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DataEntry;
