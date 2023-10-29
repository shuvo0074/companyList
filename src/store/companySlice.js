import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_COMPANY = {
  city: "",
  country: "",
  coverImageUrl: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800",
  createdAt: new Date().toISOString(),
  description: "",
  endDate: "",
  id: "-1",
  investmentRaised: 0,
  investmentSought: 0,
  logo: "https://cdn-assets.seedrs.com/www/assets/fallback/startup/summary/default-9eb2ec4cb18ae9e706672d020da623b1a7870f9d513f83647835ee6352da5a35.png",
  logoUrl: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800",
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
