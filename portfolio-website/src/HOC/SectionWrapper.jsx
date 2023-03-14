import React from 'react'
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motions'

const SectionWrapper = (Component,idName) => 
function Hoc(){
    return(
        <motion.section variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className='sm:px-16 px-6 sm:py-16 py-10 mx-w-7xl mx-auto'
        >
            <Component />
        </motion.section>
    )
}

export default SectionWrapper
