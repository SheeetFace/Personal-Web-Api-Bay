"use client"
import Link from "next/link";
import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

interface CardAPIProps{
    title:string,
    src:string,
    describe:string,
    path:string,
}

export const CardAPI:React.FC<CardAPIProps>=({title,src,describe,path})=>{
    return (
        <Card isFooterBlurred className="w-1/5 min-w-64 h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">API</p>
                <h4 className="text-black font-medium text-2xl">{title}</h4>
            </CardHeader>
            <Image  removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={src}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
                <p className="text-black text-tiny">Here are api's that </p>
                <p className="text-black text-tiny">{describe}</p>
            </div>
            <Link href={path || ''}>
                <Button className="text-tiny" color="primary" variant="shadow"  radius="full" size="sm">
                    Lets's Try
                </Button>
            </Link>
            </CardFooter>
        </Card>
    )
}