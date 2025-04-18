import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
      <div className={css.itembox}>
      <img src={avatar} alt="Avatar" width="100" />
          <p className={css.name}>{name}</p>
      <p className={clsx(css.offline, isOnline && css.online)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
