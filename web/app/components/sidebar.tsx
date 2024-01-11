import TextButton from '@/components/button/text-button'
import Menu from '@/components/menu/menu-list'
import Image from 'next/image'
import Link from 'next/link'
import './sidebar.scss'

type Props = {
  user:{
    avatar: string,
    name: string,
    description:string,
    action:{
      shits:number,
      replies: number,
      forked:number  
    }
  }
}

const SideBar  = ({user}:Props)=>{

	return (<>
		<aside className="sidebar surface-low has-corner-small">
			<div className="sidebar__user container-high">
				<Image className="sidebar__user__avatar has-corner-full" src={user.avatar} alt="avatar" height={48} width={48}/>
				<h1 className="sidebar__user__name sub-title">{user.name}</h1>
				<h2 className="sidebar__user__description body">{user.description}</h2>
				<TextButton label={`${user.action.shits} Shits`} icon='wc' className='sidebar__user__action'/>
				<TextButton label={`${user.action.replies} Replies`} icon='reply' className='sidebar__user__action'/>
				<TextButton label={`${user.action.forked} Forked`} icon='fork_right' className='sidebar__user__action'/>
			</div>
			<div className="sidebar__menus mt-4">
				<Menu label='Activities' menus={[
					{icon:'wc',title:'Shits',href:'/'},
					{icon:'fork_right',title:'Forks',href:'/'},
				]}/>				
			</div>
			<div className='sidebar__footer'>
				<Link href='/auth/login'>
					<h3 className='sub-title'>Logout</h3>
				</Link>
				<caption className='caption py-4'>Ver 0.0.1</caption>
			</div>
		</aside>
	</>)
}

export default SideBar