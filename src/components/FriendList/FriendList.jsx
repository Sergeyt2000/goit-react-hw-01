import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
// import friends from "../../friends.json";

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
