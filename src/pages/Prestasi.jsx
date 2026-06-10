import { useMemo } from "react"

export default function Prestasi({ data }) {
    const midIndex = Math.round(data.length / 2);
    const PrestasiCard = ({ prestasi, index }) => {
        if (index % 2 == 0) return (
            <div className="flex flex-col items-center prestasi-ganjil">
                <h2 className="text-head-3">{prestasi.nama}</h2>
                <p className="font-body text-body-3 md:text-body-2 text-center">Juara ke-{prestasi.peringkat} {prestasi.anggota.length > 1 && `dan diraih oleh ${prestasi.anggota.join(', ')}`}</p>
            </div>
        )
        else return (
            <div className="flex flex-col items-center prestasi-genap">
                <h2 className="text-head-3">{prestasi.nama}</h2>
                <p className="font-body text-body-3 md:text-body-2 text-center">Juara ke-{prestasi.peringkat} {prestasi.anggota.length > 1 && `dan diraih oleh ${prestasi.anggota.join(', ')}`}</p>
            </div>
        )
    }

    return (
        <div className="w-full h-svh flex flex-col gap-15 justify-center items-center font-head text-light prestasi-container">
            {data.map((prestasi, index) => {
                if (index == midIndex) {
                    return (
                        <div>
                            <h1 className="text-head-2 md:text-head-1 mb-15 text-primary prestasi-big-text">Prestasi Kita</h1>
                            <PrestasiCard prestasi={prestasi} index={index} />
                        </div>
                    )
                }
                else {
                    return <PrestasiCard prestasi={prestasi} index={index} />
                }
            })}
        </div>
    )
}