import { useState, useRef, useCallback, useMemo } from 'react';

interface InputItem{
  id: number
  value: string
}

import type { ComponentType } from 'react';

export const useDynamicList = ()=>{
  const [inputs, setInputs] = useState<InputItem[]>([{ id:0, value:"" }])
  const nextId = useRef(1)

  const addInput = useCallback(()=>{
    setInputs(prevInputs =>[...prevInputs,{ id:nextId.current, value:"" }])
    nextId.current += 1;
  },[])

  const handleInputChange = useCallback((id:number, newValue:string)=>{
    setInputs(prevInputs =>
      prevInputs.map(input =>input.id === id ? { ...input, value:newValue } : input)
    )
  },[])

  const deleteInput = useCallback((id:number)=>{
    setInputs(prevInputs => prevInputs.filter(input => input.id !== id));
  },[])

  const clearInput = useCallback((id:number)=>{
    handleInputChange(id, '');
  },[handleInputChange])

  const renderItems = useMemo(() => (RenderComponent:ComponentType<any>)=>{
    return inputs.map((input)=>(
      <RenderComponent
        key={input.id}
        id={input.id}
        value={input.value}
        onChange={handleInputChange}
        onDelete={deleteInput}
        onClear={clearInput}
      />
    ))
  },[inputs,handleInputChange,deleteInput,clearInput])

  return{
    inputs,
    addInput,
    handleInputChange,
    deleteInput,
    clearInput,
    renderItems
  }
}