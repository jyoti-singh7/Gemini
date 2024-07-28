import { useContext } from "react";

import "./Main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src="https://lh3.googleusercontent.com/ogw/AF2bZyh2XfTGSH2qSo0c-yMZfjhk6rhac68tMZNijFOAqClS9No=s64-c-mo" alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , Jyoti </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Kerala")
								}
							>
								<p>Suggest Some Place To Visit In Kerala </p>
								<img src="https://img.icons8.com/?size=48&id=88004&format=png" alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>Brainstorm team bonding activities for our work retreat </p>
								<img src="https://img.icons8.com/?size=64&id=19181&format=png" alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How to Create a Gyroscope using Disc?")
								}
							>
								<p>How to Create a Gyroscope using Disc?</p>
								<img src="https://img.icons8.com/?size=48&id=TfBuMnTzwL0v&format=png" alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Create a Script for the youtube video about coding "
									);
								}}
							>
								<p>Create a Script for the youtube video about coding </p>
								<img src="https://img.icons8.com/?size=48&id=87276&format=png" alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src="https://lh3.googleusercontent.com/ogw/AF2bZyh2XfTGSH2qSo0c-yMZfjhk6rhac68tMZNijFOAqClS9No=s64-c-mo" alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src="data:image/png;base64,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" alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src="https://img.icons8.com/?size=48&id=vZXsDTsIG6qK&format=png" alt="" />
							<img src="https://img.icons8.com/?size=48&id=85836&format=png" alt="" />
							<img
								src="https://img.icons8.com/?size=48&id=93330&format=png"
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;