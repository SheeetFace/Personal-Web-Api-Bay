import { Button } from "@nextui-org/button"

interface ButtonAddImageItemProps {
    addInput:()=>void
}
export const ButtonAddImageItem:React.FC<ButtonAddImageItemProps> = ({addInput}) => {

    return (
        <div className="w-full flex justify-center mt-10">
          <Button 
            color="primary" 
            variant="flat" 
            size="sm" 
            className="text-lg" 
            onClick={addInput}
          > 
            + 
          </Button>
        </div>
    )
}

