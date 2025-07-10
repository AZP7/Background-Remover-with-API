import React,{useState} from 'react'

const APIkey = "APY0MaKurmlR7CyuZ5XnzZDAwgrcLN8ZMW9WRIV6jVIBiD8idfkrZqwGRtTFoT98gsav9v"
const APIurl = "https://api.apyhub.com/processor/image/remove-background/file"



export const RemoveBG = async (file) => {

    const formatData = new FormData();
    formatData.append('image', file);
  
    const response = await fetch(`${APIurl}`,{
      method:'POST',
      headers: {
      "apy-token":`${APIkey}`,
      // No 'Content-Type' for FormData
    },
  
    body: formatData,
    })
    
    const data  = await response.json();
    console.log(data) 
}

function API() {

  const [loading, setLoading] = useState(false)
  const [error,setError] = useState('')
  const [image, setImage] = useState('')
  
  return   
}

export default API
