import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types' 

const Separator = ({ marginVertical }) => {
  return (
    <View style={{ marginVertical }} />
  )
}

Separator.propTypes = {
  marginVertical: PropTypes.number.isRequired,
}

export default Separator