import './search-bar.scss'

type Props = {
  menuIsOpened: boolean,
  notifications: number,
  placeholder: string 
}



const SearchBar  = ({menuIsOpened=false,notifications=0,placeholder}:Props)=>{

	return (<div className='searchBar container-high is-large has-corner-medium'>
		<span className="icon material-symbols-outlined is-clickable">{menuIsOpened?'menu_open':'menu'}</span>
		<input placeholder={placeholder} className="searchBar__input body" type='text'></input>
		<span className="icon material-symbols-outlined is-clickable">search</span>
		<span className="icon material-symbols-outlined is-clickable">{notifications===0 ? 'notifications':'notifications_active'}</span>
	</div>)
}

export default SearchBar