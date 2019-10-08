import React from 'react';
import T from 'prop-types';


function User({ avatar, name, tag, location, stats }) {
    return (
        <div class="description">
      <img
        src={avatar}
        alt="user avatar"
        className="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
        <ul>
            {stats.map(item => (
            <li key={item.label}>{item.quantity}</li>
            ))}
        </ul>
    </div>
    );
  }


User.propTypes = {
  avatar: T.string.isRequired,
  alt: T.string,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
    }).isRequired,
)};

export default User;