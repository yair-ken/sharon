import styles from "./style.module.css"

export default function SideBar(){
      let category = [`פ"ש`,`מועדים`,`דמויות מהתנ"ך`,`סיפורים`]
      return(
      <div>
            {category.map(v=><div>{v}</div>)}
      </div>
      )
}