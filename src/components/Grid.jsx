import { finishedItems, visibleItems } from "../data";
import Card from "./Card";

export default function Grid({images, isVisible, finish}){
    return (
        <ul className="cards">
        {
            images.map((item)=>(<Card key={item.id} url={item.url} isVisible={visibleItems.includes(item.id)} finish={finishedItems.includes(item.id)}/>))
        }
        </ul>
    )
}