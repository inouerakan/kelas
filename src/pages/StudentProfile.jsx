import { useState, useMemo, useRef } from "react";
import gsap from "gsap";

const sentences = ['WE ARE RPL', 'YOUNG DEVS', 'BUILD & CREATE', 'CODE & DESIGN', 'XI RPL 2', 'LETS GO'];

export default function StudentProfile({ data }) {
    const [infoOpen, setInfoOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(0);
    const studentOffsets = useMemo(
        () => data.map(() => Math.random() * 200 - 100), [data]
    );
    const sentenceOffsets = useMemo(
        () => sentences.map(() => Math.random() * 400 - 200), [sentences]
    );

    function toggleStudentInfo(id) {
        if (infoOpen) closeStudentInfo(id);
        else openStudentInfo(id);
    }

    const visibleStudentsRef = useRef([]);

    function openStudentInfo(id) {
        setInfoOpen(true);
        document.body.style.overflowY = 'hidden';
        const students = document.querySelectorAll('.student-item');
        gsap.to('.bg-students', { opacity: 0 });

        students.forEach((item) => {
            if (parseFloat(gsap.getProperty(item, 'opacity')) > 0) {
                visibleStudentsRef.current.push(item);
            }

            if (item.dataset.id == id) {
                gsap.to(item, { scale: 1.3 });
                // Hanya .student-info di dalam item ini
                gsap.to(item.querySelectorAll('.student-info'), { opacity: 1 });
                gsap.to(item.querySelector('.student-image'), { opacity: 0 });
                return;
            }
            gsap.to(item, { opacity: 0, pointerEvents: 'none' });
        });
    }

    function closeStudentInfo(id) {
        setInfoOpen(false);
        document.body.style.overflowY = 'auto';
        gsap.to('.bg-students', { opacity: 1 });

        visibleStudentsRef.current.forEach((item) => {
            if (item.dataset.id == id) {
                gsap.to(item, { scale: 1 });
                // Hanya .student-info di dalam item ini
                gsap.to(item.querySelectorAll('.student-info'), { opacity: 0 });
                gsap.to(item.querySelector('.student-image'), { opacity: 1 });
                return;
            }
            gsap.to(item, { opacity: 1 });
        });
        gsap.to('.student-item', { pointerEvents: 'auto' });
        visibleStudentsRef.current = [];
    }

    return (
        <div id="student-profile" className="w-fit h-svh flex items-center gap-35 pl-110 md:pl-275 pr-80 font-head students relative">
            {data.map((item, index) => (
                <div
                    key={item.id}
                    data-id={item.id}
                    style={{ transform: `translateY(${studentOffsets[index]}px)` }}
                    className="relative aspect-square w-50 bg-primary text-head-2 student-item shadow-2xl flex flex-col justify-between p-2"
                    onClick={() => toggleStudentInfo(item.id)}>
                    <h2 className="absolute -bottom-10 -right-10 text-center">{item.id}</h2>
                    <h1 className="absolute -top-15 text-center text-nowrap left-1/2 -translate-x-1/2 opacity-0 student-info">{item.nickname}</h1>
                    <p className="font-body text-body-2 opacity-0 student-info text-start text-light">{item.jenisKelamin}, {item.tanggalLahir}</p>
                    <p className="font-body text-body-2 opacity-0 self-center text-center student-info text-light">{item.nama}</p>
                    <p className="font-body text-body-2 opacity-0 self-end student-info text-end text-light">{item.hobi}</p>
                    <div style={{ backgroundImage: `url(/images/students/${item.nama.toLowerCase().split(' ').join('')}.webp)` }} className="absolute inset-0 bg-cover bg-center w-full h-full student-image"></div>
                </div>
            ))}
            <div className="w-full h-full flex justify-around items-center absolute -z-1 left-0 bg-students">
                {sentences.map((item, index) => (
                    <h1
                        key={index}
                        style={{ transform: `translateY(${sentenceOffsets[index]}px)` }}
                        className="text-[240px] text-primary"
                    >{item}</h1>
                ))}
            </div>
        </div>
    )
}