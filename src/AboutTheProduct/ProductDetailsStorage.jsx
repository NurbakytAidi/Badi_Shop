import { useOutletContext } from "react-router-dom";

export default function ProductDetailsStorage({ description }) {
    const context = useOutletContext().description;
    // console.log(context)

    return (
        <>
            <p>
                <strong>Product about instruction:</strong> {context}
            </p>
        </>
    );
}
