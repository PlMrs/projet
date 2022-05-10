import { Accelerometer } from 'expo-sensors';
import { useEffect, useRef, useState } from "react";
import { Animated, Button, Dimensions, StyleSheet, Text, View } from "react-native";

export default function Sensor({navigation}: any){

  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

 /* const ballAnim = useRef(new Animated.ValueXY({left,top})).current;

  const smoothMove = () => {
    Animated.timing(ballAnim, {

    }).start();
  }*/

    Accelerometer.setUpdateInterval(100);

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription]: any = useState(null);

    const activer = () => {
        setSubscription(
          Accelerometer.addListener(AccelerometerData => {
            setData(AccelerometerData);
          })
        );
      };
    
      const desactiver = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };


    useEffect(() => {
        activer();
        return () => desactiver();
    }, []);

    useEffect(()=>{
      let moveX = data.x * 100;
      let moveY = data.y * 100;

      if(left - moveX < 0)
        setLeft(0)
      else if(left - moveX >= Dimensions.get('window').width - styles.circle.width)
        setLeft(Dimensions.get('window').width - styles.circle.width)
      else
        setLeft( left - moveX)

      if(top + moveY < 0)
        setTop(0)
      else if(top + moveY >= Dimensions.get('window').height - styles.circle.height)
        setTop(Dimensions.get('window').height - styles.circle.height)
      else
        setTop( top + moveY)

    },[data])

   // const Accelerometer = () => Accelerometer.setUpdateInterval(16);
    return(
        <View style={{flex: 1}}>
            <View style={{flex: 2, position: 'relative'}}>
              <Text>
                  x:{data.x.toFixed(2)} y:{data.y.toFixed(2)} z:{data.z.toFixed(2)}
              </Text>
              <Text>
                Left: {left}
                Top: {top}
              </Text>
              <View style={[styles.circle,{top : top, left : left}]} />

            </View>
            
            <View style={{flex: 1, justifyContent: 'space-evenly'}}>
              <Button  title={subscription === null ? "Démarrer" : "Arreter"} onPress={subscription === null ? activer : desactiver}/>
              <Button title="Retour" onPress={()=>{navigation.goBack()}} />
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
  circle:{
    position: 'relative',
    width:50,
    height:50,
    borderRadius: 100 / 2,
    backgroundColor: 'red'
  }
})