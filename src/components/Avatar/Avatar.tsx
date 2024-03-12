import { AvatarProps } from './type';
import styles from "./Avatar.module.css";

const Avatar = ({color = "grey"}: AvatarProps) => {
  return <div className={styles.avatar} style={{backgroundColor: `${color}`}}></div>
}

export default Avatar;