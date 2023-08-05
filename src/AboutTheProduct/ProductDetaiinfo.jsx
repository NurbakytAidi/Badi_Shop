import { useOutletContext } from "react-router-dom";
import Button from "../Buttons/Button";

export default function ProductDetailinfo({title, price, onProductAdd}) {
    const context = useOutletContext().price
    const apTitle = useOutletContext().title || "Default Name"
    // console.log(context);
    // console.log(apTitle)

    return <>
            <p>
                {apTitle}
            </p>
            <h1>buy now</h1>
            <Button onClick={() => onProductAdd(context)}>${context !== undefined && context}</Button>
            
        </>;
    

}