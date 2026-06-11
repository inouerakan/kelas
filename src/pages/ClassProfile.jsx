import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ClassProfile() {
    const tickerRef = useRef(null);

    useGSAP(() => {
        const ticker = tickerRef.current;
        if (!ticker) return;
        const inner = ticker.querySelector('.ticker-wrap');
        const content = ticker.querySelector('.ticker-text');
        inner.appendChild(content.cloneNode(true));
        const allTickerTexts = ticker.querySelectorAll('.ticker-text');
        allTickerTexts.forEach((item) => {
            gsap.to(item, {
                xPercent: -100,
                repeat: -1,
                duration: 20,
                ease: 'linear'
            })
        })
    }, { scope: tickerRef });

    return (
        <div id="class-profile" className="w-full min-h-svh flex flex-col gap-7.5 md:gap-15 justify-center px-20 py-60 text-light relative class-profile">
            <div className="flex flex-col lg:flex-row gap-7.5 lg:gap-30 lg:items-end">
                <div className="font-head text-[119px] leading-none lg:text-[338px] lg:leading-65 rpl-dua">RPL</div>
                <p className="font-body text-body-3 lg:text-body-2 rpl-paragraf">XI RPL 2 adalah kelas kompetensi keahlian Rekayasa Perangkat Lunak tingkat sebelas yang berfokus pada pengembangan perangkat lunak. Kami mempelajari fondasi pemrograman, arsitektur basis data, algoritma, serta siklus pengembangan aplikasi mulai dari tahap perancangan hingga penyusunan kode program.</p>
            </div>
            <div ref={tickerRef} className="w-[300%] h-fit -translate-x-35 bg-light rpl-letter text-dark font-body text-body-3 lg:text-body-2 p-2 whitespace-nowrap tracking-widest select-none ticker">
                <div className=""></div>
                <div className="flex gap-12 ticker-wrap">
                    <div className="flex gap-12 ticker-text">
                        <span>FRONTEND DEVELOPER</span> <span>•</span>
                        <span>BACKEND DEVELOPER</span> <span>•</span>
                        <span>UI/UX DESIGNER</span> <span>•</span>
                        <span>SOFTWARE ENGINEERING</span> <span>•</span>
                        <span>SYSTEM ANALYST</span> <span>•</span>
                        <a href="https://www.instagram.com/xiposeerpl2/">XIPOSEERPL2 (Instagram)</a> <span>•</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7.5 lg:gap-30 lg:items-end">
                <p className="font-body text-body-3 lg:text-body-2 rpl-paragraf">Melalui integrasi pembelajaran teori dan praktik di laboratorium komputer, kelas ini dilatih untuk menguasai berbagai bahasa pemrograman modern, metodologi pencarian eror (debugging), hingga pengembangan antarmuka web yang responsif serta adaptif terhadap kebutuhan industri.</p>
                <div className="font-head text-[119px] leading-none lg:text-[338px] lg:leading-65 rpl-dua sm:self-start md:self-end">DUA</div>
            </div>
        </div>
    )
}