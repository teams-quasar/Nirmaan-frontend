import React from 'react'
import { hideNewEditor } from '../../../store/blogNewEditorSlice';
import { useDispatch } from 'react-redux';

function CloseBotton() {

    const dispatch = useDispatch();

  const handleCrossClick = () => {
    dispatch(hideNewEditor());
  };

  return (
    <div>
         <button
         onClick = {handleCrossClick}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 w-6 aspect-square"
                alt=""
              />
              </button>
    </div>
  )
}

export default CloseBotton