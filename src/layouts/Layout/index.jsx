import Footer from "../Footer"
import Header from "../Header"
import Main from "../Main"
import SideBar from "../SideBar"
import styles from "./style.module.css"

export default function Layout(){
      return(
            <div>
                  <Header/>
                  <div className={styles.div}>      
                        <SideBar/>
                        <Main/>
                  </div>
                  <Footer/>
            </div>
      )
}