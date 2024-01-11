type Props = {
    label:string,
    type?: 'filled',
    mode?: 'primary'|'accent',
    onClick?: ()=>void;   
}

export const Button = ({label,mode,type}:Props)=>{

    

	const className = ['button',type].join(' ')

	return (<>
		<button className={className}>{label}</button>
	</>)
}