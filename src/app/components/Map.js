import styles from "./map.module.css";

export default function Map(){
    return(
        <iframe className={styles.iframe}
          id="gmap_canvas"
          src={"https://maps.google.com/maps?       q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          frameborder="0" scrolling="no">
</iframe>
    )
}