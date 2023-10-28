import { useEffect } from 'react';
import usecompanyViewModel from '../view-models/useCompanyViewModel';


const useHomecompanyController = () => {
  const { companyList, currentCompany, removecompanyList, fetchcompany, fetchCurrentCompany, } = usecompanyViewModel();

  return {
    currentCompany,
    companyList,
    fetchCurrentCompany,
    fetchcompany
  };
};

export default useHomecompanyController;
