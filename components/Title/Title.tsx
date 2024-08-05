import { title } from "../primitives"

interface TitleProps{
    top:string
    main:string
    bottom:string
}

export const Title:React.FC<TitleProps> = ({top,main,bottom})=>{

    return (
        <div className="inline-block text-center justify-center">
            <h1 className={title() + " text-lg"}>{top}&nbsp;</h1>
            <h1 className={title({ color: "blue" }) + " text-lg"}>{main}</h1>
            <h1 className={title() + " text-lg"}>{bottom}</h1>
        </div>
    )
}