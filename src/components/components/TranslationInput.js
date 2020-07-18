import React from 'react'
import PropTypes from 'prop-types'




const TranslationInput = (word) => {

  return(
    <input> </input>
  );
}



TranslationInput.propTypes = {
  en: PropTypes.string.isRequired
}

export default TranslationInput