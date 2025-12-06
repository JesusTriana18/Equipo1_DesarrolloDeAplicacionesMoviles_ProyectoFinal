import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons';

const Link = ({ text, url }) => {

    const handlePress = () => {
        Linking.openURL(url);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.linkText}>
                {text}
            </Text>
            <MaterialIcons name="open-in-new" size={18} color="#007AFF" style={styles.icon} />
        </TouchableOpacity>
    )
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Link

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        color: '#007AFF',
        textDecorationLine: 'underline',
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon:{
        marginLeft: 5,
    }
})