import { Button } from "@nextui-org/button";    

interface ButtonDeleteImageItemProps { 
    id: number;
    onDelete: (id: number) => void;
}

export const ButtonDeleteImageItem:React.FC<ButtonDeleteImageItemProps> = ({id,onDelete}) => {

    return (
        <Button color="primary" 
                variant="light"
                radius="sm"
                size='lg' 
                isIconOnly
                className="text-lg" 
                onClick={() => onDelete(id)}
        > 
            ✕
        </Button>
    )
}

