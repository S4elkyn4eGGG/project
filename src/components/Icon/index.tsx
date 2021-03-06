import React from 'react';

import { IIconProps } from 'models/ui.model';

import icons from 'assets/sprite.svg';

const Icon = ({ name }: IIconProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={`icon icon-${name}`}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export default Icon;
