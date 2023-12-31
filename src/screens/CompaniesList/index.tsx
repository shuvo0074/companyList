import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import useHomecompanyController from '../../view-controllers/useHomecompanyController';
import { CompanyItem, EmptyList } from '../../components';
import { styleGuide } from '../../styles/globalStyles';

export const CompaniesListScreen = () => {
  const { companyList, fetchcompany } = useHomecompanyController()
  useEffect(() => {
    fetchcompany();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.addressListView}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={companyList}
          contentContainerStyle={{
            paddingBottom: styleGuide.padding
          }}
          renderItem={({ item }) =>
            <CompanyItem
              company={item}
            />}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
};
