import '../css/shortlistedkid.css'
import ImgCard from '../components/ImgCard'


function ShortListedKids() {
    const shortlisted = [
        {
            id: 1,
            imgSrc:'/findtalent/1.jpg',
            roleOne:'Actor',
            roleTwo:'Model',
            kidName:'Kabir',
            location:'Mumbai Maharashtra',
            kidsAge:9,
            kidsHeight:132,
            kidsWeight:28,
            kidsGender:'Male',
            aboutKid:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.',
            directLink:'/kidsprofile'
        },
        {
            id: 2,
            imgSrc:'/findtalent/2.jpg',
            roleOne:'Model',
            kidName:'Aditi',
            location:'Mumbai Maharashtra',
            kidsAge:7,
            kidsHeight:128,
            kidsWeight:26,
            kidsGender:'Female',
            aboutKid:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.',
            directLink:'/kidsprofile'
        },
    ]
    const suggested = [
        {
            id: 1,
            imgSrc:'/findtalent/3.jpg',
            roleOne:'Actor',
            roleTwo:'Model',
            kidName:'Anushka',
            location:'Mumbai Maharashtra',
            kidsAge:8,
            kidsHeight:129,
            kidsWeight:32,
            kidsGender:'Female',
            aboutKid:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.',
            directLink:'/kidsprofile'
        }
    ]
  return (
    <>
        <div className='shortlisted-kid-section'>
            <p id='headline'>Shortlisted </p>
            {
                shortlisted.map(({id,imgSrc,roleOne,roleTwo,kidName,location,kidsAge,kidsHeight,kidsWeight,kidsGender,aboutKid,directLink}) => (
                    <div key={id}>
                        <ImgCard imgSrc={imgSrc} roleOne={roleOne} roleTwo={roleTwo} kidName={kidName} location={location} kidsAge={kidsAge} kidsHeight={kidsHeight} kidsWeight={kidsWeight} kidsGender={kidsGender} aboutKid={aboutKid} directLink={directLink}/>
                    </div>
                ))
            }
        </div>

        <div className='suggested-kids-section'>
            <p id='headline-secondary'>Browse similar artists</p>
            {
                suggested.map(({id,imgSrc,roleOne,roleTwo,kidName,location,kidsAge,kidsHeight,kidsWeight,kidsGender,aboutKid,directLink}) => (
                    <div key={id}>
                        <ImgCard imgSrc={imgSrc} roleOne={roleOne} roleTwo={roleTwo} kidName={kidName} location={location} kidsAge={kidsAge} kidsHeight={kidsHeight} kidsWeight={kidsWeight} kidsGender={kidsGender} aboutKid={aboutKid} directLink={directLink}/>
                    </div>
                ))
            }
        <p className='seeAll'>See All</p>
        </div>
    </>
  )
}

export default ShortListedKids
