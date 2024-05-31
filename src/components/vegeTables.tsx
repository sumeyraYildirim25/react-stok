import { FruitOrVeggy, TableWrapperTypes } from "./types"

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "domates", price: "20", stock: true },
        { id: 2, name: "biber", price: "30", stock: false },
        { id: 3, name: "patlıcan", price: "20", stock: true },
        { id: 4, name: "salatalık", price: "15", stock: false },
        { id: 5, name: "brokoli", price: "35", stock: true },
        { id: 6, name: "fasulye", price: "25", stock: false },
        { id: 7, name: "bezelye", price: "35", stock: true },
        { id: 8, name: "bakla", price: "25", stock: false },
    ]

    return (

        <>

            <div>
                <ul>
                    <h3>VEGİTABLES</h3>

                    {veggies.filter((veggie) => {
                        const input = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                        const checkbox = !isThere || veggie.stock;
                        return input && checkbox;
                    }).map((veggie) => {
                        if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                            return (
                                <li key={veggie.id}>{`
                                ${veggie.name}- ${veggie.price}₺
                                `
                                }
                                </li>
                            )

                    })

                    }
                </ul>
            </div>

        </>

    )
}