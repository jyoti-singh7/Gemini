import "./Sidebar.css";

import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
	return (
		<div className="sidebar">
			<div className="top">
                
				<img
					src="https://img.icons8.com/?size=48&id=83195&format=png"
					className="menu"
					alt="menu-icon"
					onClick={() => {
						setExtended((prev) => !prev);
					}}
				/>
                

				<div className="new-chat">
					<img src="https://img.icons8.com/?size=48&id=3220&format=png" alt="" onClick={()=>{
                        newChat()
                    }} />
					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Recent</p>
						{prevPrompts.map((item, index) => {
							return (
								<div onClick={()=>{
                                    loadPreviousPrompt(item)
                                }} className="recent-entry">
									<img src="https://img.icons8.com/?size=64&id=jOjH1Mt48Fp1&format=png" alt="" />
									<p>{item.slice(0, 18)}...</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src="https://img.icons8.com/?size=48&id=m0X59wVKxiRO&format=png" alt="" />
					{extended ? <p>Help</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src="https://img.icons8.com/?size=48&id=86125&format=png" alt="" />
					{extended ? <p>Activity</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src="https://img.icons8.com/?size=48&id=82535&format=png" alt="" />
					{extended ? <p>Settings</p> : null}
				</div>
			</div>
		</div>
	);
};


export default Sidebar;