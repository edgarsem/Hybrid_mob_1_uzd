import React, { useState } from 'react'
import { View, StyleSheet, Button, Pressable, Text } from 'react-native'

const Home = () => {
  const [boxStyle, setBoxStyle] = useState({
    1: styles.regBoxStyle,
    2: styles.regBoxStyle,
    3: styles.regBoxStyle,
    4: styles.regBoxStyle,
    });

  function switchColors(boxNum) {
    setBoxStyle((boxStyle) => {
      const newBoxStyle = { ...boxStyle };
      
      if (boxStyle[boxNum] === styles.regBoxStyle) {
        newBoxStyle[boxNum] = styles.altBoxStyle;
      } else {
        newBoxStyle[boxNum] = styles.regBoxStyle;
      }
      return newBoxStyle;
    });
  };


   return (
      <View style = {styles.innerContainer}>
         <View style = {styles.leftContainer}>
          <View style = {styles.buttonContainer}>
          {[1, 2, 3, 4].map((buttonNum) => (
            <Button key={buttonNum} title={`Button${buttonNum}`} onPress={() => switchColors(buttonNum)} />))}
          </View>
         </View>

          <View style = {styles.rightContainer}>
           <View style={styles.boxContainer}>
              {[1, 2, 3, 4].map((boxNum) => (
                <View key={boxNum} style={[styles.box, boxStyle[boxNum]]}>
                  <Text style={[styles.boxText, boxStyle[boxNum]]}>
                    BOX{boxNum}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      

   );
};


const styles = StyleSheet.create ({
   innerContainer: {
	  flex: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0C356A',
      height: 600
   },
   leftContainer: {
      width: 180,
      height: 750,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D5FFD0'
   },
   rightContainer: {
      width: 180,
      height: 750,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#279EFF'
   },
   boxContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 120,
      height: 500
   },
   box: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderWidth: 7
   },
   boxText: {
      fontSize: 20
   },
  regBoxStyle: {
      backgroundColor: '#D5FFD0',
      borderColor: '#40F8FF',
      color: '#279EFF'
   },
   altBoxStyle: {
      backgroundColor: '#FF9B50',
      borderColor: '#E25E3E',
      color: '#C63D2F'
   },
   buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 120,
      height: 400
   }
})

export default Home;


