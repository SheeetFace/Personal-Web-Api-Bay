'use client'

import { useState, useRef, memo } from "react";

import { useApi } from "@/hook/useApi";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Snippet } from "../Snippet/Snippet";

import { PreviewImage } from "../PreviewImage/PreviewImage";
import { ActionButton } from "../ActionButton/ActionButton";
import { ButtonDeleteImageItem } from "../buttons/imageApi/ButtonDeleteImageItem";

import { cloudinaryUploadToNewLink } from "@/api/cloudinary/cloudinaryUploadToNewLink";


interface LinkToLinkItemProps { 
    id: number;
    onDelete: (id:number) => void;
}

export const UploadToLinkItem = memo(({id,onDelete}:LinkToLinkItemProps) => {
    const [file, setFile] = useState<string|null>(null);

    const { newLink, isLoading, error, execute: handleGetNewLink } = useApi(cloudinaryUploadToNewLink);

    const fileInputRef = useRef<HTMLInputElement|null>(null);
  
    const handleFileSelect=()=>{
        if(fileInputRef.current) fileInputRef.current.click();
    }
  
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>)=>{
        const selectedFile = e.target.files?.[0];
  
            if(selectedFile){
                const reader = new FileReader();
                reader.onloadend = async()=>{
                if(reader.result){
                    setFile(reader.result as string)
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    }
  
    return (
      <div className="flex justify-between">
        <div className=" flex gap-1 w-2/5">
            <PreviewImage src={file || '/preview.webp'}/>
            
            <Input
                type="file"
                accept="image/*"
                size="lg"
                onChange={handleFileChange}
                className="hidden"
                ref={(ref) => {fileInputRef.current = ref}}
            />
            
            <Button onClick={handleFileSelect} size="lg" radius='sm'> Upload </Button>

            <ButtonDeleteImageItem onDelete={onDelete} id={id}/>

        </div>

        <ActionButton   isLoading={isLoading}
                        newLink={newLink}
                        value={file || ''}
                        imageValid={!!file}
                        fn={handleGetNewLink}
        />
              
        <Snippet isLoading={isLoading} newLink={newLink}/>

      </div>
    )
})
