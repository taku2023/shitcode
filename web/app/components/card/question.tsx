import Link from 'next/link'
import './question.scss'

type Props = {
  user: {
    name: string,
    href: string,
  } 
  postedAt: string,
  tags: {
    label: string,
    href: string,
  }[],
  title:string,
  content: string, 
  language: string,
  files: number,
  replies: {
    user: {
      name: string,
      href: string,
    },

  }[]
}

const Replies = (replies: Props['replies'])=>{

	if (replies.length===0){
		return <>
      No replies yet
		</>
	}else if(replies.length===1){
		return <>
    ${replies[0].user.name} Replied
		</>
	}else{
		return <>
      ${replies[0].user.name} and ${replies.length-1} others replied
		</>
	}
}

const QuestionCard = (props:Props)=>{
	const {user,postedAt,tags,title,content,language,replies,files} = props

  
	return (<>
		<div className="question-card container-low is-medium has-corner-medium">
			<div className="question-card__tags mb-1">
				{tags.map((tag,index)=><Link href={tag.href} key={index}>
					<span className="label">{tag.label}</span>
				</Link>)}
			</div>
			<h1 className="question-card__title title is-ellipsis">{title}</h1>
			<h2 className="question-card__content body">{content}</h2>
			<div className="question-card__detail caption mt-1">
				<span className="material-symbols-outlined">description</span>
				<span className="">{files}</span>
				<span className="material-symbols-outlined">code</span>
				<span className="">{language}</span>
			</div>
			<p className="question-card__user caption">
				<Link href={`/user/${user.name}`}>@{user.name}
				</Link>
				<span>{postedAt}</span>
			</p>
			<p className="question-card__replies ">
				<Replies {...replies}/>
			</p>
		</div>
	</>)
}

export default QuestionCard