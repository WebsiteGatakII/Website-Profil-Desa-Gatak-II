import { useEffect, useState } from 'react';
import Foto from '../assets/dummy.jpg';
import Pagination from '../components/Pagination';
import { database } from '../data/database';

const BusinessPage = () => {

    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const response = database.DATA_UMKM;

    useEffect(() => {
        setData(response);
    }, []);

    const filtered = keyword == "" ? data : data.filter((d) => {
        return d?.name.toLowerCase().includes(keyword.toLowerCase());
    });
    const totalPages = Math.ceil(filtered.length/itemsPerPage);
    const paginated = filtered.length <= 0 ? filtered : filtered.slice((currentPage-1)*itemsPerPage, (currentPage*itemsPerPage));

    return <>
        <div className="container mt-5 mb-3" style={{minHeight: "90vh"}}>
            <h1 className='fw-bold'>Halaman UMKM</h1>

            <div className="d-flex flex-row w-100">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Cari di sini" value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
                </div>
            </div>

            <div className="d-flex flex-column">
                {
                    data.length <= 0 ? <p className='fw-bold text-center fs-5 w-100'>Belum ada data UMKM</p> : paginated.map((d) => {
                        return <>
                            <div className="card mb-3 w-100 border border-0 shadow" >
                                <div className="row g-0">
                                    <div className="col-3" style={{"max-height": "100px"}}>
                                        <img src={d?.picture == null ? Foto : d?.picture} className="img-fluid rounded-start w-100 object-fit-cover h-100" alt="..."  />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">{d?.name}</h5>
                                        <a href={d?.link} target='_blank' className='text-decoration-none'><p className="card-text"><small className="text-body-secondary">Klik di sini untuk melihat lokasi</small></p></a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }

                {
                    keyword != "" && filtered.length <= 0 ? <p className='fw-bold text-center fs-5 w-100'>Data UMKM tidak ditemukan</p> : <></>
                }
            </div>

            <div className="d-flex justify-content-end">
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage}/>
            </div>
        </div>
    </>
}

export default BusinessPage;