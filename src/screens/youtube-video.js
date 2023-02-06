import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import YouTube from 'react-native-youtube';


export default YoutubePlayer = () => {
  const [isReady, setIsReady] = useState(false)
  const [status, setStatus] = useState(null)
  const [quality, setQuality] = useState(null)
  const [error, setError] = useState(null)

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: '100%', width:'100%'}}>
          {/* <Text>YoutubePlayer</Text> */}
          <YouTube
            apiKey='AIzaSyD6FWgL-E8Cglt_J8DH3-TDSfXhNpaZiy0'
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
            play={false} // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => setIsReady(true)}
            onChangeState={e => setStatus(e.state)}
            onChangeQuality={e => setQuality(e.quality)}
            onError={e => setError(e.error)}
            style={{height: 300}}
          />
        </View>
      </SafeAreaView>
  )
}