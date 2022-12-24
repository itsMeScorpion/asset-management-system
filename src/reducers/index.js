import { combineReducers } from 'redux';
const initialState = {
  employeeData: [],
  addEmployeeLoading: false,
  selectedEmployeeId: null,
  selectedEmployeeDetails: null,
  successMessage: null,
  EDITVAL: [],
};
const assetInitialState = {
  assetData: [],
  addAssetLoading: false,
};
const authState = {
  loginStatus: localStorage.getItem('loginStatus'),
};
const allocation = {
  employee: [],
};
const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE_DATA':
      return {
        ...state,
        employeeData: action.payload,
      };
    case 'SET_ADD_EMPLOYEE_LOADING':
      return {
        ...state,
        addEmployeeLoading: action.payload,
      };
    case 'SET_EMPLOYEE_DETAILS':
      return {
        ...state,
        selectedEmployeeDetails: action.payload,
      };
    case 'SET_EMPLOYEE_ID':
      return {
        ...state,
        selectedEmployeeId: action.payload,
      };

    case 'EDIT_VAL': {
      return {
        ...state,
        EDITVAL: action.payload,
      };
    }
  }
  return state;
};

const AssetReducer = (state = assetInitialState, action) => {
  switch (action.type) {
    case 'SET_ASSET_DATA':
      return {
        ...state,
        assetData: action.payload,
      };
    case 'SET_ADD_ASSET_LOADING':
      return {
        ...state,
        addAssetLoading: action.payload,
      };
    case 'SET_ASSET_DETAILS':
      return {
        ...state,
        selectedAssetDetails: action.payload,
      };
    case 'SET_ASSET_ID':
      return {
        ...state,
        selectedAssetId: action.payload,
      };
    case 'SET_SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: action.payload,
      };
  }
  return state;
};

const AuthReducer = (state = authState, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      const loginStatus = localStorage.getItem('loginStatus');
      if (action.payload !== null) {
        localStorage.setItem('loginStatus', true);
        return {
          ...state,
          loginStatus: loginStatus,
        };
      } else {
        return {
          ...state,
          loginStatus: loginStatus,
        };
      }
  }
  return state;
};
const AllocationReducer = (state = allocation, action) => {
  switch (action.type) {
    case 'SET_ALLOCATED_EMPLOYEE':
      console.log('AllocationReducer', action.payload);
      return {
        ...state,
        employee: action.payload,
      };
  }

  return state;
};
export default combineReducers({
  employee: EmployeeReducer,
  asset: AssetReducer,
  auth: AuthReducer,
  allocData: AllocationReducer,
});
