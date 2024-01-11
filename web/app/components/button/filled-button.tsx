
type Props = {
  label:string,
  mode?: 'primary'|'accent',
	className?: string,
}


const FilledButton  = ({label,mode='primary',className}:Props)=>{

	const _className = `filled-button label has-corner-small container-${mode} ${className??''} is-large`
	return (
		<>
			<button className={_className}>
				{label}
			</button>
		</>
	)
}

export default FilledButton