import '../styles/contentpage.css'
import {data} from '../data/data'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import {useNavigate} from 'react-router-dom'

const ContentPage=()=>{
    const navigate = useNavigate()
    console.log(data)
    return (
        <section className="content-page">
      
        <div className='grid-elements'>
            {data?.map((items,i ) =>(
                <div key={i} className='flex-elements' onClick={()=>{navigate(`/more/${i}`)}}>
                    <img src={items.img.img1} alt="" />
                    <h2 className='main-text'>{items.maintext}</h2>
                    <div className='cta'><BsFillArrowRightCircleFill/></div>
                    <p className='sub-text'>{items.subtext}</p>
                </div>
            ))
            }
        </div>

        </section>
    )
}

export default ContentPage