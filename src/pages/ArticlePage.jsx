import { useEffect, useState } from 'react';
import Foto from '../assets/dummy.jpg';
import Pagination from '../components/Pagination';
import { database } from '../data/database';
import AOS from 'aos';

const ArticlePage = () => {

    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const response = database.DATA_ARTIKEL;

    useEffect(() => {
        setData(response);
    }, []);

    const filtered = keyword == "" ? data : data.filter((d) => {
        return d?.title.toLowerCase().includes(keyword.toLowerCase());
    });
    const totalPages = Math.ceil(filtered.length/itemsPerPage);
    const paginated = filtered.length <= 0 ? filtered : filtered.slice((currentPage-1)*itemsPerPage, (currentPage*itemsPerPage));

    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);

    return <>
        <div className="container mt-5">
            <h1 className='fw-bold'>Halaman Artikel</h1>

            <div className="d-flex flex-row w-100">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Cari di sini" value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
                </div>
            </div>

            <div className="d-flex">
                {
                    data.length <= 0 ? <p className='fw-bold text-center fs-5 w-100'>Belum ada data UMKM</p> : paginated.map((d) => {
                        return <a href={`/detail-artikel/${d?.id}`} className='w-100' style={{textDecoration: "none"}} key={d?.id} data-aos="fade-up">
                            <div className="card mb-3 w-100 border border-0 shadow" >
                                <div className="row g-0">
                                    <div className="col-3">
                                        <img loading='lazy' src={d?.picture == null ? Foto : d?.picture} className="img-fluid rounded-start w-100 object-fit-cover h-100" alt="gambar-artikel" style={{"maxHeight": "100px"}} />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">{d?.title}</h5>
                                        <p className="card-text"><small className="text-body-secondary">{d?.date}</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    })
                }

                {
                    keyword != "" && filtered.length <= 0 ? <p className='fw-bold text-center fs-5 w-100'>Data artikel tidak ditemukan</p> : <></>
                }
            </div>

            <div className="d-flex justify-content-end">
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage}/>
            </div>
        </div>
    </>
}

export default ArticlePage;