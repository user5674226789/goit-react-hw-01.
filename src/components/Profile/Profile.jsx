import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profilePage}>
            <div className={css.profile}>
                <img
                    className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}><b>{name}</b></p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span><b>{stats.followers}</b></span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span><b>{stats.views}</b></span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span><b>{stats.likes}</b></span>
                </li>
            </ul>
        </div>
    )
}