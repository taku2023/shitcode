import './text-button.scss'

type Props = {
  icon?:string,
  label:string,
	size?: 'small'|'medium'|'large'
} &{
	className?: string
}

const TextButton = ({icon,label,className='',size='medium'}:Props)=>{

	return (<>
		<button className={`text-button container is-medium title is-transparent ${className}`}>
			{icon && <span className="icon material-symbols-outlined">{icon}</span>}
			{label}
		</button>
	</>)
}

export default TextButton