interface ImageValidationResult {
    src: string;
    isValid: boolean;
}

const isValidImage = (src:string):boolean => {
    try{
        const url = new URL(src);
        const pathname = url.pathname.toLowerCase();
        const validExtensions = /\.(jpg|jpeg|png|gif|bmp|svg|tiff|ico)$/i;
        
        return((url.protocol === 'http:' || url.protocol === 'https:') && validExtensions.test(pathname))

    }catch (error){
        return false;
    }
}
  
export const getValidSrc = (src:string): ImageValidationResult => {
    if(isValidImage(src)) return {src,isValid:true};
    return {src:'/preview.webp',isValid:false}
}