import React from 'react';

import './Avatar.scss';

const Avatar = () => {
  return (
    <div className='avatar'>
      <img
        className='avatar__img'
        src='./assets/image-avatar.jpg'
        alt='user avatar'
      />
    </div>
  );
};

export default Avatar;
