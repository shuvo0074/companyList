/* eslint-disable quotes */
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useCompanyViewModel from '../../view-models/useCompanyViewModel';
import useHomecompanyController from '../../view-controllers/useHomecompanyController';

export const CompanyDetailsScreen = ({
  route: { params },
}: NativeStackScreenProps<any>) => {
  const { fetchCurrentCompany, removecompany } = useHomecompanyController()
  const { currentCompany } = useCompanyViewModel()
  useEffect(() => {
    if (params)
      fetchCurrentCompany(params.id)

    return () => {
      removecompany()
    }
  }, [params])
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentCompany.coverImageUrl }}
        style={styles.coverImage}
        resizeMode='contain'
      />
      <Image
        source={{ uri: currentCompany.logoUrl }}
        style={styles.profileImage}
        resizeMode='contain'
      />
      <Text style={styles.boldText}>{currentCompany.name}</Text>
      <Text style={styles.desc}>{`${currentCompany.city},${currentCompany.country}`}</Text>
      <Text style={styles.desc} >{currentCompany.description}</Text>
    </View>
  );
};
