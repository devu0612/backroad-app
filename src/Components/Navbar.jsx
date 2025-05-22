import React from 'react'                //components are just like functions
import { menu } from '../data';
import { socialIcons } from '../data';

const Navbar = () => {
  const menuitem = () =>{

  }
  return <>
  <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
          {
            menu.map((item)=>(
              // const{id,title,link} = item;
              <>
              <li>
            <a href={item.link} className="nav-link"> {item.title} </a>
          </li>
              </>
            ))

          }

          {/* {                                                             // another method
            menu.map((item)=>{
              const{id,title,link} = item;
              return(
              <>
              <li>
            <a href={link} className="nav-link"> {title} </a>
          </li>
              </>
              );
            })

          } */}

        </ul>

        <ul className="nav-icons">
          {
            socialIcons.map((item)=>(
              <>
              <li>
            <a href={item.url} target="_blank" className="nav-icon"
              ><i className={item.icon}></i
            ></a>
          </li>
              </>
            ))
          }
          
          
        </ul>
      </div>
    </nav>
  </>
};

export default Navbar