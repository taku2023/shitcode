import './form-input.scss'

interface Props{
	label :string
	placeholder?: string
	type: 'text' | 'password' | 'email'
	name: string,
}

const FormInput = ({label,placeholder,type,name}:Props)=>{	
	return (
		<div className="form-input">
			<label htmlFor={name} className="label form-input__label">{label}</label>
			<input id={name} className="title input container-high has-corner-small is-large" type={type} placeholder={placeholder} name={name}></input>
		</div>
	)
	
}

export default FormInput