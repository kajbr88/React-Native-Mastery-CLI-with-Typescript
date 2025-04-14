import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

export default function FlatCards() {
    const isDarkMode = useColorScheme() === 'dark'
  return (
    <View>
      <Text style={[styles.headingText, isDarkMode ? styles.whiteText : styles.darkText]}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>Sky Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>Sky Blue</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    darkText: {
        color: '#FDAE44',
    },
    whiteText: {
        color: '#FFFFFF',    
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})