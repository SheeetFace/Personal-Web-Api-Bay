import { useMemo } from "react"
import { CardAPI } from "../card/CardAPI/CardAPI"

import type { CardApiList } from "@/types/cardApiListType"

interface CardContainerProps{
    cards:CardApiList[]
}
  
export const CardContainer:React.FC<CardContainerProps> = ({ cards }) => {

    const renderCards = useMemo(()=>{
        return cards.map((card)=>{
            return(
                <div key={card.title} className="flex justify-center m-5">
                    <CardAPI title={card.title}
                            src={card.src}
                            describe={card.describe}
                            path={card.path}/>
                </div>
            )
        })
    },[cards])

    return (
        <section className="p-6 justify-center flex flex-wrap items-center mt-6">
            {renderCards}
        </section>
    )
}