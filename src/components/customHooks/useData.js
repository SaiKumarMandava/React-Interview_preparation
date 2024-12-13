import {useState,useEffect} from 'react'
import axios from 'axios'
export default function useData(url) {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await axios.get(url)
          setData(response.data)
        }catch(error){
          setError(error.message)
        }
      }
      fetchData()
    },[url])
  return {data,error}
}
