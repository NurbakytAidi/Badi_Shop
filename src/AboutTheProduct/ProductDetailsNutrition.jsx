import { useOutletContext } from "react-router-dom";


export default function ProductDetailsNutrition({category}) {
    const context = useOutletContext();
    const rating = context.rating;
    const apCategory = useOutletContext().category


    return(
        <>
            <table className="table table-nutrition">
                <thead>
                    <tr>
                        <th>Rating</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr>
                        <td>rate</td>
                        <td>{rating.rate}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{apCategory}</td>
                    </tr>
                    <tr>
                        <td>count</td>
                        <td>{rating.count}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}