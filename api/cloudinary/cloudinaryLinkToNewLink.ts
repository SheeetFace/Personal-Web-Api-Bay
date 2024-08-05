"use server";
export const cloudinaryLinkToNewLink= async(imageUrl:string)=>{

    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || '';

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    if(!/^https?:\/\//i.test(imageUrl)) imageUrl = `https:${imageUrl}`
    
    const formData = new FormData();
    formData.append('file', imageUrl);
    formData.append('upload_preset', UPLOAD_PRESET);

    try{
        const response = await fetch(url,{
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        console.log('Cloudinary response:', data);

        if(data.secure_url){
            return data.secure_url.replace(/\.[^.]+$/, '.webp');
        }else{
            console.error('Error in Cloudinary response:', data);
            return imageUrl;
        }
    }catch(error){
        console.error('Error uploading image:', error);
        return imageUrl;
    }
}