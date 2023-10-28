/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import request from 'graphql-request';
import { getCompanyDocument, graphqlEndpoint } from '../../../config';
import { useSelector } from 'react-redux';
import useCompanyViewModel from '../../view-models/useCompanyViewModel';

export const CompanyDetailsScreen = () => {
  const { currentCompany } = useCompanyViewModel()
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
