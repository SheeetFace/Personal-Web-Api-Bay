"use client"
import { useDynamicList } from "@/hook/useDynamicList";

import { ButtonAddImageItem } from "../buttons/imageApi/ButtonAddImageItem";
import { LinkToLinkItem } from "../LinkToLinkItem/LinkToLinkItem";

export const DynamicInputList: React.FC = () => { 

    const {addInput,renderItems} = useDynamicList();
  
    return (
      <div className="flex flex-col gap-2 ">
        {renderItems(LinkToLinkItem)}
        <ButtonAddImageItem addInput={addInput}/>
      </div>
    )
}