import Foto from '../assets/dummy.jpg';
import Foto1 from '../assets/carousel/1.webp';
import Foto2 from '../assets/carousel/2.webp';
import Foto3 from '../assets/carousel/3.webp';

const MainPage = () => {
    return <>
        <section className="w-100 position-relative">
            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={Foto1} className="d-block w-100 object-fit-cover" style={{height: "100vh"}} alt="foto-carousel-1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Foto2} className="d-block w-100 object-fit-cover" style={{height: "100vh"}} alt="foto-carousel-2" />
                    </div>
                    <div className="carousel-item" ata-bs-interval="2000">
                        <img src={Foto3} className="d-block w-100 object-fit-cover" style={{height: "100vh"}} alt="foto-carousel-3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center main-text-container'>
                <div className="d-flex flex-column w-100">
                    <p className='text-center m-auto text-light fs-2 fw-bold main-text'>Selamat Datang di</p>
                    <p className='text-center m-auto text-light fs-1 fw-bold main-text'>Website Profil Desa Gatak II</p>
                </div>
            </div>
        </section>
    </>
}

export default MainPage;