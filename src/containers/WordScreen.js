import React from 'react'
import {connect} from 'react-redux'
import wordImage from '../components/wordImage.js'




const WordScreen = (props) => {

  return (
      <wordImage img={props.img} />
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(WordScreen);