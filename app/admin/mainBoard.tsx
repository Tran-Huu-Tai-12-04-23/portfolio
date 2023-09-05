import { motion } from 'framer-motion';
import Header from '@/app/admin/header';
import DashBoard from '@/app/admin/dashboard';
import IntroSetting from '@/app/admin/intro';
import AboutSetting from '@/app/admin/about';
import ContactSetting from '@/app/admin/contact';
// import EmailReceivedSetting from '@/app/admin/emailReceived';
import ExperienceSetting from '@/app/admin/experience';
import ProjectsSetting from '@/app/admin/project';
import SkillSetting from '@/app/admin/skill';
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
            {order === 2 && <IntroSetting></IntroSetting>}
            {order === 3 && <AboutSetting></AboutSetting>}
            {order === 4 && <ProjectsSetting></ProjectsSetting>}
            {order === 5 && <ExperienceSetting></ExperienceSetting>}
            {order === 6 && <SkillSetting></SkillSetting>}
            {order === 7 && <ContactSetting></ContactSetting>}
            {/* {order === 8 && <EmailReceivedSetting></EmailReceivedSetting>} */}
        </motion.div>
    );
}

export default MainBoard;
