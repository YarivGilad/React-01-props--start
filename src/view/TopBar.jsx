// export default () => {
const TopBar = ({ children }) => {
	return (
		<div className="top-bar">
			{children}
			<img className="logo" src="./icons/logo.svg" alt="logo" />
			<h1>I am the top bar</h1>
		</div>
	)
}
export default TopBar
