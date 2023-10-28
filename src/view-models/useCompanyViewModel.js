import { useSelector, useDispatch } from 'react-redux';
import { companyAction } from '../store/companySlice';
import axios from 'axios';
import { getCompaniesUrl } from '../../config';

const useCompanyViewModel = () => {
  const dispatch = useDispatch();
  const {
    companyList,
    currentCompany
  } = useSelector(state => state.company);

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
      dispatch(updateCurrentCompany({}))
    },
    removecompanyList: _ => dispatch(setcompanyList([]))
  };
};

export default useCompanyViewModel;
