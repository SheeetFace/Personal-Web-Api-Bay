"use client"
import { memo } from "react";

import { Input } from "@nextui-org/input";

import { cloudinaryLinkToNewLink } from "@/api/cloudinary/cloudinaryLinkToNewLink";

import { useApi } from "@/hook/useApi";

import { PreviewImage } from "../PreviewImage/PreviewImage";
import { Snippet } from "../Snippet/Snippet";
import { ActionButton } from "../ActionButton/ActionButton";
import { ButtonDeleteImageItem } from "../buttons/imageApi/ButtonDeleteImageItem";

import { getValidSrc } from "@/utils/getValidSrc";


interface LinkToLinkItemProps { 
    id: number;
    value: string;
    onChange: (id:number, newValue:string) => void;
    onDelete: (id:number) => void;
    onClear: (id:number) => void; 
}

export const LinkToLinkItem = memo(({ id, value, onChange, onDelete, onClear }:LinkToLinkItemProps ) => {

    const { newLink, isLoading, error, execute: handleGetNewLink } = useApi(cloudinaryLinkToNewLink);

    const image = getValidSrc(value);

    return (
        <div className="flex gap-1 justify-between">
            <div className="flex gap-1 w-2/5"> 
                <div className="flex-shrink-0">
                    <PreviewImage src={image.src}/>
                </div>

                <Input
                    isClearable
                    id={`input-${id}`}
                    size='sm'
                    type="url"
                    label='Link'
                    value={value}
                    onChange={(e) => onChange(id, e.target.value)}
                    onClear={() => onClear(id)}
                />

                <ButtonDeleteImageItem onDelete={onDelete} id={id}/>

            </div>

            <ActionButton   isLoading={isLoading}
                            newLink={newLink}
                            value={value}
                            imageValid={image.isValid}
                            fn={handleGetNewLink}
            />
            
            <Snippet isLoading={isLoading} newLink={newLink}/>
        </div>
    )
})