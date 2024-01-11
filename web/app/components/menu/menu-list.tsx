import Link from 'next/link'
import './menu-list.scss'

type Param = {
  icon?:string,
  title:string,
  href:string
}

const MenuItem = ({href,icon,title}:Param)=>{
	return (<>
		<Link href={`/${href}`}>
			<li className="menu-item">
				{icon && <span className="icon material-symbols-outlined">{icon}</span>}
				<span className="body">{title}</span>
			</li>
		</Link>
	</>)
}

const Menu = ({menus,label}:{label:string,menus:Param[]})=>{
	return (<div className="menu">
		<label className='label'>{label}</label>
		<ul className="menu-list mt-2">
			{menus.map((item)=>
				<MenuItem {...item} key={item.title}/>
			)}
		</ul>      
	</div>
	)
}

export default Menu
