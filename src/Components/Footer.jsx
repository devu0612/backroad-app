import React from 'react'
import { socialIcons } from '../data';
import { menu } from '../data';

// const Footer = () => {
//   return 
//     <>
//     <footer class="section footer">
//       <ul class="footer-links">
//         {
//           menu.map((item)=>(
//             <li>
//           <a href={item.link} class="footer-link">{item.title}</a>
//         </li>

//           ))
//         }
        
//         <li>
//           <a href="#about" class="footer-link">about</a>
//         </li>
//         <li>
//           <a href="#services" class="footer-link">services</a>
//         </li>
//         <li>
//           <a href="#featured" class="footer-link">featured</a>
//         </li>
//       </ul>
//       
//       <p class="copyright">
//         copyright &copy; Backroads travel tours company
//         <span id="date"></span> all rights reserved
//       </p>
//     </footer>
//     </>
  
// };

// export default Footer

const Footer = () => {
  return (
   <>
   <footer className="section footer">
      <ul className="footer-links">
        {
                    menu.map((item) =>{
                      const{link,id,title} = item;
                    <>
                     <li>
                    <a href={item.link} className="footer-link"> 
                      {item.title} 
                      </a>
                  </li>
        
                    </>
                 })
                    
                }
      <ul class="footer-icons">
         {
           socialIcons.map((item)=>(
             <li>
           <a href={item.url} target="_blank" class="footer-icon"
             ><i class={item.icon}></i
           ></a>
         </li>
           ))}
       </ul>  
        
      </ul>
      <p className="copyright">
        copyright & copy;
        Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
   </>
  )
}
export default Footer