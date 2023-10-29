import { useEffect } from 'react';
import usecompanyViewModel from '../view-models/useCompanyViewModel';


const useHomecompanyController = () => {
  const { companyList, currentCompany, removecompany, fetchcompany, fetchCurrentCompany, } = usecompanyViewModel();

  return {
    currentCompany,
    companyList,
    fetchCurrentCompany,
    fetchcompany,
    removecompany
  };
};

export default useHomecompanyController;
