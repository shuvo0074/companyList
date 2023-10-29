import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SHADOW_STYLE, colors, dimensions, fontSizes, fontWeights, styleGuide } from '../styles/globalStyles';
import { navigate } from '../services/NavigationService';


const CompanyItem = ({ company }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('CompanyDetails', { id: company.id })
      }}
    >
      <Image
        source={{ uri: company.logoUrl }}
        resizeMode='contain'
        style={styles.logoStyle}
      />
      <Text style={styles.title}>{`${company.name}: `}
        <Text style={styles.subtitle}>{company.description}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 30,
    width: 30,
    marginRight: styleGuide.padding
  },
  container: {
    padding: styleGuide.padding,
    borderRadius: styleGuide.radius,
    marginVertical: styleGuide.padding / 4,
    width: dimensions.fullWidth - styleGuide.padding * 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    ...SHADOW_STYLE
  },
  title: {
    fontSize: styleGuide.titleTextSize,
    fontWeight: styleGuide.titleTextWeight,
    color: colors.dark,
    width: dimensions.fullWidth - (5 * styleGuide.padding + 30)
  },
  subtitle: {
    fontWeight: fontWeights.fw400,
    color: colors.dark,
    fontSize: fontSizes.fs14
  }
});

export default CompanyItem;
