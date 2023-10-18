import React from "react";

export default function ProdutosSlug({params}) {
    return (
        <div>
            <h1>Produto: {params.slug}</h1>
        </div>
    )
}