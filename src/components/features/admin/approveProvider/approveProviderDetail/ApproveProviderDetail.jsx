import React from "react"
import {useParams} from "react-router-dom"
import productsData from "../productsData"

function ApproveProviderDetail() {
    const {storeId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === storeId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
        </div>
    )
}

export default ApproveProviderDetail