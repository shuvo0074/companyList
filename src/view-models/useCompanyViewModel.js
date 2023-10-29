import { useSelector, useDispatch } from 'react-redux';
import { companyAction } from '../store/companySlice';
import axios from 'axios';
import { getCompaniesUrl, getCompanyDocument, graphqlEndpoint } from '../../config';
import request, { gql } from 'graphql-request';
import { navigate } from '../services/NavigationService';

const useCompanyViewModel = () => {
  const dispatch = useDispatch();
  const {
    companyList,
    currentCompany
  } = useSelector(state => state.company);
  const {
    user: { token }
  } = useSelector(state => state.auth);

  const { setcompanyList, updateCurrentCompany } = companyAction;

  return {
    companyList,
    currentCompany,
    fetchcompany: () => {
      axios.get(getCompaniesUrl)
        .then(res => {
          if (res.status === 200) {
            dispatch(setcompanyList(res.data))
          }
        })
        .catch(e => console.log(e))
    },
    fetchCurrentCompany: (id) => {
      request(graphqlEndpoint, gql`${getCompanyDocument}`, { id }, { 'x-api-key': token })
        .then(res => {
          if (res.getCompany)
            dispatch(updateCurrentCompany(res.getCompany))
          else
            navigate('CompaniesList')
        })
        .catch(e => {
          navigate('CompaniesList')
        })
    },
    removecompanyList: _ => dispatch(setcompanyList([]))
  };
};

export default useCompanyViewModel;
