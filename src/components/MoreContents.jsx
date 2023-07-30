import {data} from '../data/data'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import '../styles/contentpage.css'
import { useParams} from 'react-router-dom'

const MoreContents=()=>{
    const id = useParams()

    console.log(id)
    console.log(data)
    return (
        <>
        <div className='grid-elements'>
            {data?.map((items,i ) =>(
                <div key={i} className='flex-elements'>
                    <img src={items.img.img1} alt="" />
                    <h2 className='main-text'>{items.maintext}</h2>
                    <div className='cta'><BsFillArrowRightCircleFill/></div>
                    <p className='sub-text'>{items.subtext}</p>
                </div>
            ))
            }
        </div>
        </>
    )}
export default MoreContents
