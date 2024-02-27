/*  
  1. Function Components - export and export default 
----------------------------------------------------- */
export function Card(props) {
	return (
		<div className="card">
			<h1 className="headline">I am a Card</h1>
			<h2 className="paragraph">
				Let's {props.action} some {props.subject}
			</h2>
		</div>
	)
}
export default Card

/*  
  2. Destructure props, arrow function component 
----------------------------------------------------- */
// const Card = (props) => {
// 	const { action, subject } = props

// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				Let's {action} some {subject}
// 			</h2>
// 		</div>
// 	)
// }
// export default Card

/*  
  3. Inline destructure 
------------------------- */
// const Card = ({ action, subject }) => {
// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				Let's {action} some {subject}
// 			</h2>
// 		</div>
// 	)
// }
// export default Card

/*  
  4. Minimalistic component 
------------------------------- */
// const Card = ({ action, subject }) => (
// 	<div className="card">
// 		<h1 className="headline">I am a Card</h1>
// 		<h2 className="paragraph">
// 			Let's {action} some {subject}
// 		</h2>
// 	</div>
// )
// export default Card

/*  
  5. JSX possible outputs:
        container tag / React.fragment /
		string / null / Array of JSX blocks
----------------------------------------------- */
// function Card({ action, subject }) {
// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				Let's {action} some {subject}
// 			</h2>
// 		</div>
// 	)
// }

// export default Card

/*  
  6. Spread objects into props 
--------------------------------- */
// import Thumb from './Thumb'

// const Card = (props) => {
// 	// console.log(props)
// 	let { action, subject } = props

// 	// let extraData = {
// 	// 	action: 'mingle with',
// 	// 	day: 'Wednesday',
// 	// 	feel: 'great'
// 	// }

// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				Let's {action} some {subject}
// 			</h2>
// 			<Thumb action={props.action} subject={props.subject} />
// 			<Thumb {...props} />
// 			{/* <Thumb {...extraData} {...props} /> */}
// 		</div>
// 	)
// }
// export default Card
