import useAuthViewModel from '../view-models/useAuthViewModel';


const useAuthController = () => {
  const { setEmail, setPassword, loginWithAPI, loginFromData, logout, user, isLoggedIn, loginData } = useAuthViewModel();

  return {
    setEmail, setPassword, loginWithAPI, loginFromData, logout, user, isLoggedIn, loginData
  };
};

export default useAuthController;
