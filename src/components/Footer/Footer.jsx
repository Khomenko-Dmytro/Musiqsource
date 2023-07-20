import styles from "./footer.module.scss";
import stylesGrid from "../../styles/grid.module.scss";
import cn from "classnames";

const Footer = ({ playlist }) => {
  return (
    <footer
      className={cn(styles.bottom__bay)}
      style={playlist ? { marginTop: "144px " } : { marginTop: "80px" }}
    >
      <div className={cn(styles.bottom__separator)}></div>
      <div className={cn(styles.bottom__cont)}>
        <div className={cn(styles.sect)}>
          <span className={cn(styles.sect__hdr)}>INFO</span>
        </div>
        <div className={cn(styles.sect)}>
          <span className={cn(styles.sect__hdr)}>CONNECT</span>
        </div>
        <div className={cn(styles.sect)}>
          <span className={cn(styles.sect__hdr)}>LEGAL</span>
        </div>
        <div className={cn(styles.sect)}>
          <span className={cn(styles.sect__hdr, styles.co)}>
            2023 Musiqsource, Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
