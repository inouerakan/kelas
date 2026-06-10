export default function Navigation() {
    const logoUrl = new URL(`../assets/images/additional/logo-xpose.svg`, import.meta.url).href;
    const circleUrl = new URL(`../assets/images/additional/circle.png`, import.meta.url).href;

    return (
        <div>
            <div className="fixed w-full p-4 top-0 flex justify-center font-body text-body-2 mix-blend-difference z-10">
                {/* <div className="text-white font-head text-head-2">XIP</div> */}
                <div className="flex font-head justify-center items-center gap-0.5 text-head-3 text-light tracking-widest logo-container">
                    <span className="logo-text-kiri">XIP</span><img src={circleUrl} alt="" className="h-8 logo-circle" /><span className="logo-text-kanan">SEE</span>
                </div>
                {/* <img src={logoUrl} alt="" className="h-10" /> */}
            </div>
            <div className="fixed w-full p-4 bottom-0 flex justify-between items-center font-body text-body-2 mix-blend-difference z-10">
                <a href="#student-profile" className="text-light nav-text">ANGGOTA</a>
                <div className="instruction-text text-light text-body-3 md:text-body-2">KLIK FOTONYA!</div>
                <a href="#class-profile" className="text-light nav-text">TENTANG KITA</a>
            </div>
        </div>
    )
}