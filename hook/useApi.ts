import { useState, useCallback } from 'react';

type ApiFunction = (value: string) => Promise<string>;

interface UseApiResult {
    newLink: string;
    isLoading: boolean;
    error: Error | null;
    execute: (value: string) => Promise<void>;
}

export const useApi = (apiFunction:ApiFunction): UseApiResult => {

    const [newLink, setNewLink] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error|null>(null);

    const execute = useCallback(async(value: string)=>{
        setIsLoading(true);
        setError(null);

        try{
            const result = await apiFunction(value);
            setNewLink(result);
        }catch(err){
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            setNewLink('');
        }finally{
            setIsLoading(false);
        }
        
    },[apiFunction])

    return { newLink, isLoading, error, execute };
};