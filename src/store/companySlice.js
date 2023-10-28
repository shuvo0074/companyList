import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_COMPANY = {
  city: "",
  country: "",
  coverImageUrl: "https://seedrs.imgix.net/uploads/startup/summary/cover_image/32247/3en1g9xv6k7hl923xx1kkoh613y5h3z/Stamp_Free_Mobile_Header__740___416_px_.png?w=370&h=208&fit=crop&s=3d775744d9d7293f448e417c5b4cf0df",
  createdAt: new Date().toISOString(),
  description: "",
  endDate: "",
  id: "-1",
  investmentRaised: 0,
  investmentSought: 0,
  logo: "https://cdn-assets.seedrs.com/www/assets/fallback/startup/summary/default-9eb2ec4cb18ae9e706672d020da623b1a7870f9d513f83647835ee6352da5a35.png",
  logoUrl: "https://seedrs.imgix.net/uploads/startup/summary/logo/32247/3en1g9xv6k7hl923xx1kkoh613y5h3z/Stamp_Free_Logo_master.jpg?w=130&h=130&fit=crop&s=df2aa144507f095fe3938c795d0658d6",
  name: "",
  numberOfInvestors: 0,
  percentageRaised: 0,
  updatedAt: new Date().toISOString(),
  valuation: 0,
  __typename: "Company"
}
const initialState = {
  companyList: [],
  currentCompany: INITIAL_COMPANY
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setcompanyList: (state, action) => {
      state.companyList = action.payload;
    },
    updateCurrentCompany: (state, action) => {
      state.currentCompany = action.payload
    }
  },
});

const { setcompanyList, updateCurrentCompany } = companySlice.actions;

export const companyAction = {
  setcompanyList, updateCurrentCompany
};

export default companySlice.reducer;
