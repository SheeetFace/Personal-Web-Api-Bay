
import { memo } from "react";
import { useDisclosure } from "@nextui-org/react";

import ModalImage from "../ModalImage/ModalImage";

interface PreviewImageProps{
    src: string;
}

export const PreviewImage =memo(({src}:PreviewImageProps)=>{

    const { isOpen,onOpen, onClose } = useDisclosure();

    const isDefaultSrc = src === '/preview.webp';
    
    return (
        <>
            <div className={!isDefaultSrc ?"cursor-zoom-in":'cursor-default'} onClick={() => !isDefaultSrc ? onOpen() :null} role='button'>
                <img
                    src={src}
                    alt="Image Preview"
                    className="rounded-lg object-cover w-12 h-12"
                />
            </div>
            
            <ModalImage src={src} isOpen={isOpen} onClose={onClose}/>
      </>
    )
})