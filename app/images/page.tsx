import { Title } from "@/components/Title/Title"
import { CardContainer } from "@/components/CardContainer/CardContainer"

import { cardConfig } from "@/config/cards"
export default function ImagesPage(){
    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <Title  top='Comprehensive'
                main='IMAGE'
                bottom=' API Tools and Resources for Seamless Integration and Optimization.'
        />
        <CardContainer cards={cardConfig.imageApi}/>
        </div>
    )
}
