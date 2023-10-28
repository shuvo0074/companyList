import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights, styleGuide } from '../styles/globalStyles';
import { ASSETS } from '../assets';


const EmptyList = () => {
  return (
    <View>
      <Image
        source={ASSETS.emptyList}
        resizeMode='contain'
        style={styles.imageStyle}
      />
      <Text
        style={styles.listEmptyTxt}
      >
        No Company Found
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: dimensions.fullWidth / 4,
    width: dimensions.fullWidth / 4,
    alignSelf: 'center',
    marginTop: dimensions.fullWidth / 3,
  },
  listEmptyTxt: {
    fontSize: fontSizes.fs22,
    fontWeight: fontWeights.fw600,
    color: colors.secondary,
    alignSelf: 'center',
    marginTop: styleGuide.padding
  }
});

export default EmptyList;
