import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import StudentProfile from './pages/StudentProfile';
import ClassProfile from './pages/ClassProfile';
import data from './data/students.json';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    const students = document.querySelector('.students');
    let studentsWidth = students.offsetWidth;
    let studentsAmountToScroll = studentsWidth - window.innerWidth;
    const studentItems = document.querySelectorAll('.student-item');

    gsap.set(studentItems, { opacity: 0, scale: 0.7, top: 60 });
    gsap.set('.instruction-text', { opacity: 0 });
    gsap.set('.bg-students', { opacity: 0, left: 1400 });

    const tween = gsap.to(students, {
      x: -studentsAmountToScroll,
      duration: 3,
      ease: 'none'
    });

    ScrollTrigger.create({
      trigger: students,
      start: 'top top',
      end: '+=' + studentsAmountToScroll,
      pin: true,
      animation: tween,
      scrub: 1,
      markers: true,
      invalidateOnRefresh: true,
      onEnter: () => gsap.to(['.bg-students', '.instruction-text'], { opacity: 1, duration: .5 }),
      onLeave: () => gsap.to('.instruction-text', { opacity: 0, duration: .5 })
    });

    gsap.to('.bg-students', {
      x: -studentsAmountToScroll * 0.2, // lebih lambat dari container
      ease: 'none',
      scrollTrigger: {
        trigger: students,
        start: 'top top',
        end: '+=' + studentsAmountToScroll,
        scrub: 1,
        containerAnimation: tween
      }
    });


    studentItems.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        top: 0,
        scale: 1,
        scrollTrigger: {
          trigger: item,
          start: 'left 80%',
          end: 'center 70%',
          scrub: true,
          containerAnimation: tween
        }
      })
    })
  })

  return (
    <div className='min-h-svh w-full overflow-x-hidden bg-light'>
      <Navigation />
      <Hero />
      <StudentProfile data={data} />
      <ClassProfile />
    </div>
  )
}

export default App