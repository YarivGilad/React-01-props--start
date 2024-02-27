const Thumb = ({ action, subject, day, feel }) => {
	return (
		<div className="thumb">
			<h4 className="headline fz35 white-text">Thumbnail component</h4>
			<img src="https://picsum.photos/120/75" alt="some description" />
			<h5 className="paragraph white-text fz30">
				passed props: {action} {subject} {day} {feel}
			</h5>
		</div>
	)
}
export default Thumb
