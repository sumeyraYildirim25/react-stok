import { TableWrapperTypes, FruitOrVeggies } from "./types"

export const FruitsTable = ({ inputValue, isThere }: TableWrapperTypes) => {
    const fruits: FruitOrVeggies = [
        { id: 1, name: "elma", price: "15", stock: false },
        { id: 2, name: "ayva", price: "18", stock: true },
        { id: 3, name: "kiraz", price: "11", stock: false },
        { id: 4, name: "vişne", price: "27", stock: false },
        { id: 5, name: "çilek", price: "20", stock: true },
        { id: 6, name: "erik", price: "19", stock: false },
        { id: 7, name: "ananas", price: "25", stock: true },
        { id: 8, name: "mandalina", price: "40", stock: true },

    ]


    return (

        <>
            <div>
                <ul>
                    <h3 style={{ textAlign: "center" }}>FRUİTS</h3>

                    {fruits.filter((fruit) => {
                        const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                        const matchesStock = !isThere || fruit.stock;
                        return matchesName && matchesStock;
                    }).map((fruit) => (
                        <li key={fruit.id} style={{ textAlign: "center" }}>
                            {`${fruit.name} - ${fruit.price} ₺`}
                        </li>
                    ))
                    }



                </ul>
            </div>
        </>

    )
}