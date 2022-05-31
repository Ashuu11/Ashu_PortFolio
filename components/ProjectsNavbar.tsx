import React, { FunctionComponent } from 'react'
import { Category } from '../types'

export const NavItem:FunctionComponent<{
    value:Category | 'all'
    handlerFilterCategory: Function,
    active:string
}> = ({ value, handlerFilterCategory, active }) => {

    let activeclassName = 'capitalize cursor-pointer hover:text-purple-500'
    if(active === value) 
        activeclassName += " text-purple-500"

  return (
    <li className={activeclassName} onClick={() => handlerFilterCategory(value)}>
        {value}
    </li>
  )
}



const ProjectsNavbar:FunctionComponent<{
    handlerFilterCategory:Function,
    active:string
}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
        <NavItem value='all' {...props}/>
        <NavItem value='reactjs' {...props}/>
        <NavItem value='nodejs' {...props}/>
        <NavItem value='expressjs' {...props}/>
        <NavItem value='nextjs' {...props}/>
        <NavItem value='mongoDb' {...props}/>
        <NavItem value='Game Dev' {...props}/>
        <NavItem value='firebase' {...props}/>
        <NavItem value='C#' {...props}/>
    </div>
  )
}

export default ProjectsNavbar;