'use client'

import {Tabs as TabsUI, Tab as TabUI} from "@nextui-org/react";

import { DynamicInputList } from "../DynamicInputList/DynamicInputList";
import {DynamicUploadList} from "../DynamicUploadList/DynamicUploadList";

export const Tabs=()=>{

  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-4">
        <TabsUI  size='lg' color='primary' aria-label="Options" placement='top'>
          <TabUI key="Link" title=" Paste a link to get a new WebP image link. ">

            <div className="mt-3">
              <DynamicInputList/>
            </div>

          </TabUI>
          <TabUI key="Upload" title="Upload an image from your computer to get a WebP image link. ">

            <div className="mt-3">
              <DynamicUploadList/>
            </div>

          </TabUI>
        </TabsUI>
    </div>
  )
}