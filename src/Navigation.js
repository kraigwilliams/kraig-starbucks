import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import FindAStore from './FindAStore'
import MenuLink from './MenuLink'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

export const Navigation = ({toggle}) => {
    const [showMenuCategories ,setShowMenuCategories]= React.useState(false);

    return(
        <>
        { showMenuCategories ?(
<motion.ul variants={variants}>
    <MenuLink link='Menu' goBackIcon onClick={()=>{
        setShowMenuCategories(false)
    }} width='60%'/>
     <MenuLink link='All Products' goBackIcon path='/menu' onClick={()=>{
        setShowMenuCategories(false)
        toggle()
    }} />
     <MenuLink link='Featured' path='/menu/featured' goBackIcon onClick={()=>{
        setShowMenuCategories(false)
        toggle()
    }} />
    <MenuLink link='Previous Orders'  goBackIcon onClick={()=>{
        setShowMenuCategories(false)
        toggle()
    }} />
    <MenuLink link='Favorite Products'  goBackIcon onClick={()=>{
        setShowMenuCategories(false)
        toggle()
    }} />
    </motion.ul>
        ) :(

<motion.ul>

    <motion.ul variants ={variants}>
        <MenuLink link='Menu' icon onClick={()=>setShowMenuCategories(true)}/>
        <MenuLink link='Rewards' />
        <MenuLink link='Gift Cards' />
        <motion.hr variants={variants2} />
        <motion.div className='navigation__buttons'>
            {/* WE need user here*/}
            </motion.div>
            <motion.div variants ={variants2}>
                <FindAStore/>

            </motion.div>
    </motion.ul>
</motion.ul>


        )
  
        }
    </>)
  };


