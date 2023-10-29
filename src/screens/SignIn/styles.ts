import {StyleSheet} from 'react-native';
import { colors, styleGuide } from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  text: {
    marginVertical: styleGuide.padding,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    paddingVertical: styleGuide.padding,
  },
});
