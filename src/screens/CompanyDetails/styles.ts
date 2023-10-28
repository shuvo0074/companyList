import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights, styleGuide } from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: styleGuide.padding,
    paddingTop: 0
  },
  text: {
    margin: styleGuide.padding,
  },
  desc: { textAlign: 'center' },
  boldText: {
    margin: styleGuide.padding,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22
  },
  coverImage: {
    width: dimensions.fullWidth - styleGuide.padding * 2,
    height: 200
  },
  profileImage: {
    width: dimensions.fullWidth / 4,
    height: dimensions.fullWidth / 4,
    borderRadius: dimensions.fullWidth / 8,
    marginTop: - dimensions.fullWidth / 8,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: colors.primary

  }
});
