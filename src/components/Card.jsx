export default function Card({url, isVisible, finish}){
    const classCard = `card ${isVisible ? 'card-show':''} ${finish ? 'card-finished':''}`
    return(
        <li className={classCard}>
            <img src={url} width="204" height="144" alt=""/>
        </li>
    )
}