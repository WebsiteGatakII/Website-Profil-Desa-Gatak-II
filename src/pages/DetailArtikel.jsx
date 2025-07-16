import { useEffect, useState } from 'react';
import Foto from '../assets/dummy.jpg';
import { useParams } from 'react-router';
import { database } from '../data/database';

const DetailArtikelPage = () => {
    const { id } = useParams();
    const [artikel, setArtikel] = useState(null);

    const response = database.DATA_ARTIKEL;

    useEffect(() => {
        if(response) {
            const dataArtikel = response.find((data) => {
                return data?.id == id;
            })
            setArtikel(dataArtikel);
        }
    }, [])

    return <>
        <div className="container mt-5">
            <h1 className='text-center fw-bold'>{artikel?.title}</h1>
            <img loading='lazy' src={artikel?.picture} alt="foto-artikel" className="w-100 my-3 object-fit-cover shadow rounded" style={{maxHeight: "70vh", minHeight: "50vh"}} />
            {
                artikel?.paragraphs.map((paragraph) => {
                    return <p className='mb-4' style={{textAlign: "justify"}}>{paragraph}</p>
                })
            }
            
        </div>
    </>
}

export default DetailArtikelPage;