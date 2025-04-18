import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLoc}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>

        <li className={css.profileStatsItem}>
          <span>Views</span> <span>{stats.views}</span>
        </li>

        <li className={css.profileStatsItem}>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
