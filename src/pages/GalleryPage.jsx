import { useState, useEffect } from 'react';
import Foto from '../assets/dummy.jpg';
import { database } from '../data/database';
import Pagination from '../components/Pagination';

const GalleryPage = () => {

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const data = database.DATA_GALERI;

    useEffect(() => {
        if(data) {
            setPhotos(data);
        }
    }, []);

    useEffect(() => {
        if(photos) setSelectedPhoto(photos[0]);
    }, [photos]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        // const currentYear = 2024;
        const startYear = 2025;
        const yearList = [];
        for (let y = startYear; y <= currentYear; y++) {
            yearList.push(y);
        }
        setYears(yearList);
    }, []);

    const filtered = selectedYear == "Semua" ? photos : photos.filter((photo) => {
        return photo?.year.includes(selectedYear);
    });

    const totalPages = Math.ceil(filtered.length/itemsPerPage);
    const paginated = filtered.length <= 0 ? filtered : filtered.slice((currentPage-1)*itemsPerPage, (currentPage*itemsPerPage));

    return <>
        <div className="container mt-5 mb-3 h-md-100 h-50" style={{minHeight: "90vh"}}>
            <h1 className='fw-bold'>Halaman Galeri</h1>

            <div className="border border-1 w-100 rounded mb-3">
                <img src={selectedPhoto == null ? Foto : selectedPhoto?.foto} alt="" className='w-100 object-fit-cover rounded'/>
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
                <p className='fw-bold fs-5'>Pilih Foto</p>
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        {selectedYear}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedYear("Semua")}>Semua</a></li>
                        {
                            years.map((year) => (
                                <li key={year}><a className="dropdown-item" href="#" onClick={() => {
                                    setSelectedYear(`${year}`);
                                    setCurrentPage(1);
                                }}>{year}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className='w-100 row row-cols-5 g-1 mb-3'>
                { photos.length === 0 ? (
                    <p className='fw-bold text-center fs-5 w-100'>Belum ada foto di galeri</p>
                ) : (
                    paginated.map((d) => (
                        <img 
                            loading='lazy'
                            key={d?.id}
                            src={d?.foto != null ? d?.foto : Foto} 
                            alt={d?.nama} 
                            className={`gallery-photo object-fit-cover rounded ${selectedPhoto?.id == d?.id ? 'selected' : ''}`} 
                            style={{ aspectRatio: "1/1"}}
                            onClick={() => setSelectedPhoto(d)} 
                        />
                    ))
                )}
            </div>

            <div className="d-flex justify-content-end">
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage}/>
            </div>
        </div>
    </>
}

export default GalleryPage;
