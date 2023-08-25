import { motion } from 'framer-motion';
import Header from './header';
import DashBoard from './dashboard';
import Intro from './intro';
import AboutSetting from './about';
import Contact from './contact';
import EmailReceived from './emailReceived';
import Experience from './experience';
import Projects from './project';
import Skill from './skill';
interface Props {
    activeSidebar: boolean;
    setActiveSidebar: any;
    order: number;
}
const variants = {
    open: { width: '100vw', x: '-15rem' },
    closed: { width: 'calc(100vw - 15rem)', x: 0 },
};
function MainBoard({ activeSidebar, setActiveSidebar, order }: Props) {
    return (
        <motion.div
            variants={variants}
            className="flex-shrink-0 text-black max-h-screen overflow-auto "
            animate={activeSidebar ? 'closed' : 'open'}
        >
            <Header activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}></Header>
            {order === 1 && <DashBoard></DashBoard>}
            {order === 2 && <Intro></Intro>}
            {order === 3 && <AboutSetting></AboutSetting>}
            {order === 4 && <Projects></Projects>}
            {order === 5 && <Experience></Experience>}
            {order === 6 && <Skill></Skill>}
            {order === 7 && <Contact></Contact>}
            {order === 8 && <EmailReceived></EmailReceived>}
        </motion.div>
    );
}

export default MainBoard;
