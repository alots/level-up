import React from 'react';
import {connect} from 'react-redux'
import WordScreen from './containers/WordScreen'


function App() {
  return (
      <div className="App">
        <WordScreen />
      </div>
  )
}

const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps)(App);
