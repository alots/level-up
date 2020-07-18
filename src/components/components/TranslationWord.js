import React from 'react'
import PropTypes from 'prop-types'




const TranslationWord = (word) => {

  return(
    <p>{word.translation}</p>
  );
}



TranslationWord.propTypes = {
  translation: PropTypes.string.isRequired
}

export default TranslationWord