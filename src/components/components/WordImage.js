import React from 'react'
import PropTypes from 'prop-types'




const wordImage = (props) => {

  return(
    <div>{props.img}</div>
  );
}



wordImage.propTypes = {
  img: PropTypes.string.isRequired
}