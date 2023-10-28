import { useEffect } from 'react';
import usecompanyViewModel from '../view-models/useCompanyViewModel';


const useHomecompanyController = () => {
  const { companyList, currentCompany, removecompanyList, fetchcompany, fetchCurrentCompany, } = usecompanyViewModel();

  useEffect(() => {
    fetchcompany();
    return _ => removecompanyList()
  }, []);

  return {
    currentCompany,
    companyList,
    fetchCurrentCompany,
    removecompanyList
  };
};

export default useHomecompanyController;
