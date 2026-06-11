export default function Hero() {
    return (
        <div className="w-full h-svh flex flex-col justify-center items-center">
            <div className='flex flex-col md:flex-row justify-center items-center font-head gap-3 md:gap-7.5 relative'>
                <div className="flex flex-col items-center md:items-end text-2xl md:text-5xl text-dark">
                    <h3 className="hero-side-text">SMK</h3>
                    <h3 className="hero-side-text">Negeri 4</h3>
                    <h3 className="hero-side-text">Bandung</h3>
                </div>
                <div className="text-head-1 leading-none lg:text-[180px] text-primary hero-mid-text">RPL DUA</div>
                <div className="flex flex-col items-center md:items-start text-2xl md:text-5xl text-dark">
                    <h3 className="hero-side-text">Angkatan</h3>
                    <h3 className="hero-side-text">2024</h3>
                    <h3 className="hero-side-text">2027</h3>
                </div>
            </div>
        </div>
    )
}
