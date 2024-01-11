import './header.scss'

export default function Header(param:{login:boolean,notify:boolean}|undefined){
	param = param || {login: false, notify: false}
	
	return (
		<h1 className="header">
			<span className="material-symbols-outlined is-clickable">menu</span>
			<input className="no-decoration">
			</input>
			<span>
				<span className="material-symbols-outlined is-clickable">search</span>
				{
					!param.notify? <span className="material-symbols-outlined is-clickable">notifications</span>
						: <span className="material-symbols-outlined is-clickable">notifications_active</span>
				}
			</span>
		</h1>
	)
}