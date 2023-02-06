import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { 
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native'
import { Component, useState, useEffect, useRef } from 'react'

const {width: screenWidth} = Dimensions.get("window")

export default function PictureList({navigation}) {

  const [listImage, setListImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef();

  const handleScroll = (e) => {
    if(!e){
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let indexImage = 0;
      if (nativeEvent.contentOffset.x > 0){
        indexImage = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
      }
      setCurrentImage(indexImage)
      // console.log("Image index:", indexImage)
    }
  }

  useEffect(() => {

    const data = [
    {      
      image: <Image key= {"0"} source={require("../images/1.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Sonny"
    },
    {      
      image: <Image key= {"1"} source={require("../images/2.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Cannon"
    },
    {      
      image: <Image key= {"2"} source={require("../images/1.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Sonny"
    },
    {      
      image: <Image key= {"3"} source={require("../images/2.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Cannon"
    },
    {      
      image: <Image key= {"4"} source={require("../images/1.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Sonny"
    },
    {      
      image: <Image key= {"5"} source={require("../images/2.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Cannon"
    },
    {      
      image: <Image key= {"6"} source={require("../images/1.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Sonny"
    },
    {      
      image: <Image key= {"7"} source={require("../images/2.jpg")} resizeMode="stretch" style={{width: screenWidth, height: "100%"}}></Image>,
      type: "png",
      camera: "Cannon"
    }];

    setListImage(data);

  }, [])

  useEffect(() => {
    if(listImage.length > 0){
      let index = 0;
      setInterval(() =>{
        stepCarousel.current.scrollTo({ x: index * screenWidth, y:0, animated: false })
        index += 1;
        if(index === listImage.length) {
          index = 0;
        }
      }, 3000)
    }
  }, [listImage])

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1, alignItems: 'center'}}>
            <Text>Picture List</Text>
            <View style={{width: screenWidth, height: 200}}>
              <ScrollView 
                horizontal
                pagingEnabled
                contentContainerStyle={{ width: listImage.length*screenWidth, height: 200}}
                onScroll={handleScroll}
                ref={stepCarousel}
              >
                {listImage.map((e, index) =>
                    <View key={index.toString()}>
                      {e.image}
                    </View>
                  )}
              </ScrollView>
            </View>
            <View>
              <Text style={{fontSize: 20, marginTop: 30}}>Index: {currentImage}</Text>
            </View>
            
        </View>
    </SafeAreaView>
  )
}