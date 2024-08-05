import { memo } from "react";

import { Button } from "@nextui-org/button";

interface ActionButtonProps{
    isLoading:boolean,
    newLink:string,
    value:string,
    imageValid:boolean,
    fn:(value:string)=>void
}

export const ActionButton = memo(({isLoading,newLink,value,imageValid,fn}:ActionButtonProps) => {

    if(value.length === 0 || !isLoading && newLink) return null;

    return(
        <div className="h-100 flex items-center">
            <Button color={imageValid ?"primary": "danger" }
                    variant="ghost" 
                    size='sm' 
                    isDisabled={!imageValid} 
                    isLoading={isLoading}
                    onClick={()=>fn(value)}
                    >

                {imageValid ?"Get Link": "Not Valid" } 

            </Button>
        </div>
    ) 
})
