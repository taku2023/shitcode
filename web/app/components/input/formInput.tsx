import './formInput.scss'

interface Props{
	label :string
	placeholder?: string
	type: 'text' | 'password' | 'email'
	id:string
	name: string
}

const FormInput = ({label,placeholder,type,name,id}:Props)=>{

	return (
		<div className="form-input form-input--invert">
			<label htmlFor={id} className="label">{label}</label>
			<input id={id} className="input" type={type} placeholder={placeholder} name={name}></input>
		</div>
	)
	
}

export default FormInput