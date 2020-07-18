import React from 'react'
import PropTypes from 'prop-types'




const WordImage = (word) => {

  return(
    <p>{word.img}</p>
  );
}



wordImage.propTypes = {
  img: PropTypes.string.isRequired
}

export default WordImage