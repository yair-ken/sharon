import styles from "./style.module.css"

export default function SideBar(){
      let category = [`זמן פ"ש`,`מועדים`,`דמויות מהתנ"ך`,`סיפורים`]
      return(
      <div>
            {category.map(v=><div key={v} className={styles.list}>{v}</div>)}
      </div>
      )
}