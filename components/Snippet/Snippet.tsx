import { memo } from "react"

import { Snippet as SnippetUI } from "@nextui-org/snippet"

import { truncateText } from "@/utils/truncateText"

interface SnippetProps{
    isLoading: boolean
    newLink: string
}

export const Snippet = memo(({isLoading,newLink}:SnippetProps) => {

    return (
        <div className="w-80 invisible">

        <SnippetUI 
                color="default"
                size='lg'
                symbol=""
                className={(!isLoading && newLink) ? 'visible':"invisible" }
                codeString={newLink}
        >
            {truncateText(newLink, 25)}
        </SnippetUI>

    </div>
    )
})

