import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ImageBase = styled.img`
alt: "Descrição";
width: 100%;
height: 222px;
object-fit: cover;
`;

export default function Image({ src, ...props }) {
  return (
    <ImageBase
      src={src}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Image.defaultProps = {
  src: '',
};

Image.propTypes = {
  src: PropTypes.string,
};
