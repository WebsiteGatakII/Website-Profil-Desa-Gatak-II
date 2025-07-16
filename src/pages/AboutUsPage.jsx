import Foto from '../assets/dummy.jpg';
import Foto1 from '../assets/aboutus/1.webp';
import Foto2 from '../assets/aboutus/2.jpg';
import Foto3 from '../assets/aboutus/3.webp';

const AboutUsPage = () => {
    return <>
        <div className="container mt-5">
            <h1 className='fw-bold'>Halaman Tentang Kami</h1>
            <img loading='lazy' src={Foto1 == null ? Foto : Foto1} alt="gambar-desa" className="w-100 my-3 object-fit-cover shadow rounded" style={{maxHeight: "70vh", minHeight: "50vh"}} />

            <p className='mb-5' style={{textAlign: "justify"}}>Desa Gatak II terletak di wilayah Tanjungsari, Kalurahan Ngestirejo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Desa ini dikenal dengan masyarakatnya yang ramah, bersahabat, dan toleransi yang tinggi. Seluruh masyarakat di desa ini saling rukun dan sering melakukan gotong royong dengan tetangga. Kebersamaan warga desa ini juga sangat tinggi dan sering mengadakan acara seperti diskusi dan senam bersama.  Melalui website ini, kami ingin memperkenalkan Desa Gatak II lebih dekat kepada masyarakat luas.</p>

            <div className="row my-3 mb-5">
                <div className="col-md-3">
                    <img loading='lazy' src={Foto2 == null ? Foto : Foto2} alt="gambar-singkong" className='w-100 object-fit-cover shadow mb-3 rounded'/>
                </div>
                <div className="col-md-9 d-flex justify-content-center align-items-center">
                    <p style={{textAlign: "justify"}}>Mayoritas warga di Desa Gatak II berprofesi sebagai petani dan peternak. Salah satu hasil pertanian yang melimpah pada desa ini adalah singkong dan kacang. Hewan ternak yang banyak dimiliki oleh warga di desa ini adalah sapi, kambing, dan ayam. Berbagai hasil pertanian dan peternakan dari warga desa biasanya dijual kembali atau diolah menjadi makanan yang beragam dan lezat.</p>
                </div>
            </div>
                
            <div className="row my-3 mb-5">
                <div className="col-md-9 order-2 order-md-1 d-flex justify-content-center align-items-center">
                    <p style={{textAlign: "justify"}}>Desa Gatak II sering mengadakan acara rutin yang disebut "Rasulan". Perayaan ini biasanya dilakukan setelah panen sebagai bentuk wujud syukur atas hasil panen yang melimpah. Terdapat berbagai macam acara yang berlangsung hingga malam hari. Acara ini juga terbuka untuk orang luar desa jika ingin berkunjung dan melihat langsung kegiatan Rasulan.</p>
                </div>
                <div className="col-md-3 order-1 order-md-2">
                    <img loading='lazy' src={Foto3 == null ? Foto : Foto3} alt="gambar-acara" className='w-100 object-fit-cover shadow mb-3 rounded'/>
                </div>
            </div>
            
        </div>
    </>
}

export default AboutUsPage;