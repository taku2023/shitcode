import './icon-button'

type Props = {
  label: string,
}

const IconButton = ({ label }: Props) => {
	return (<>
		<span className="icon-btn material-symbols-outlined has-corner-full">{label}</span>
	</>)
}

export default IconButton