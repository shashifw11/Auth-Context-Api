  import { Button } from "../button/button"
import "./navbar.css"
export const Navbar = ()=>{
    return (
        <div className = "nav">
              <ul className = "ul">
                  <li>Menu</li>
                  <li>Section</li>
                  <li>Mens</li>
                  <li>Womens</li>
              </ul> 
              <div className= "btn">
                 < Button/>
              </div>
        </div>
    )
}