import './style.css'

export function Card (props){
    return (
        <div className='cards'>
            <span className='card-name'>{props.name}</span>
            <span className='card-time'>{props.time}</span>
        </div>
    )
}