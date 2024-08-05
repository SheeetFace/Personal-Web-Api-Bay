"use server";
import { generateSignature } from "@/utils/generateSignature";

export const cloudinaryUploadToNewLink = async (base64: string) => {
  
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
    const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '';
    const API_SECRET =process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '';
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_UPLOAD || '';

    const timestamp = Math.floor(Date.now()/1000);
    const eagerTransformation = 'f_webp';
    
    const params = {
        upload_preset: UPLOAD_PRESET,
        timestamp: timestamp,
        eager: eagerTransformation
    }

    const signature = generateSignature(params, API_SECRET);

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('file', `data:image/jpeg;base64,${base64}`);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('timestamp', timestamp.toString());
    formData.append('signature', signature);
    formData.append('api_key', API_KEY);
    formData.append('eager', eagerTransformation);

    try{
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })

        const data = await response.json();
        console.log('Cloudinary response:', data);

        if(data.secure_url){
          return data.eager && data.eager.length > 0 ? data.eager[0].secure_url : data.secure_url;
        }else{
          console.error('Error in Cloudinary response:', data);
          return null;
      }
    }catch(error){
        console.error('Error uploading image:', error);
        return null;
    }
  }