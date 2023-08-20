import { motion } from 'framer-motion';
function DashBoard() {
    return (
        <motion.div
            className="p-4 flex-shrink-0 "
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            Updating....
        </motion.div>
    );
}

export default DashBoard;
