import React from 'react';

import icons from 'assets/sprite.svg';

export interface IIcon {
  name: string;
}

const Icon = (props: IIcon): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={`icon icon-${props.name}`}
    >
      <use xlinkHref={`${icons}#${props.name}`} />
    </svg>
  );
};

export default Icon;
