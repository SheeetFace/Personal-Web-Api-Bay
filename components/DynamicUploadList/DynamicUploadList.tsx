'use client';
import { useDynamicList } from "@/hook/useDynamicList";

import { ButtonAddImageItem } from "../buttons/imageApi/ButtonAddImageItem";
import { UploadToLinkItem } from "../UploadToLinkItem/UploadToLinkItem";

export const DynamicUploadList:React.FC = () => {

    const {addInput,renderItems} = useDynamicList();
    
      return (
        <div className="flex flex-col gap-2 ">
            {renderItems(UploadToLinkItem)}
            <ButtonAddImageItem addInput={addInput}/>
        </div>
      )
}