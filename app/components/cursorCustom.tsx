'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
function CursorCustom() {
    // const cursorRef = useRef<HTMLDivElement>(null);
    // const cursorFollowerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = document.getElementById('cursor-custom');
        const links = document.querySelectorAll('a');
        const lis = document.querySelectorAll('li');
        const buttons = document.querySelectorAll('button');

        const onMouseMove = (e: MouseEvent): void => {
            let { clientX, clientY } = e;
            clientX -= 11;
            clientY -= 11;
            gsap.to(cursor, { x: clientX, y: clientY });
        };

        document.addEventListener('mousemove', onMouseMove);

        const onMouseEnter = (e: MouseEvent) => {
            gsap.to(cursor, { scale: 2.5, backgroundColor: '#4e4b74', borderColor: 'transparent' });
        };

        const onMouseLink = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'purple' });
        };
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLink);
        });
        lis.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLink);
        });
        buttons.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLink);
        });
    }, []);

    return <div id="cursor-custom" className="relative cursor-custom"></div>;
}

export default CursorCustom;
