import service from '../service';
import history from '../History';
import {
  validatePassword,
  getPasswordHashResponse,
} from '../utils/PasswordHash';

export const setEmployee = (payload) => async (dispatch) => {
  dispatch({
    type: 'SET_ADD_EMPLOYEE_LOADING',
    payload: true,
  });
  const { data } = await service.createEmployee(payload);
  console.log('data', data);

  dispatch({
    type: 'SET_ADD_EMPLOYEE_LOADING',
    payload: false,
  });
};

export const getEmployee = () => async (dispatch) => {
  const { data } = await service.listEmployees();
  console.log('actiondata', data);
  dispatch({
    type: 'SET_EMPLOYEE_DATA',
    payload: data,
  });
};

export const setAsset = (payload) => async (dispatch) => {
  dispatch({
    type: 'SET_ADD_ASSET_LOADING',
    payload: true,
  });
  const { data } = await service.createAsset(payload);
  console.log('data', data);

  dispatch({
    type: 'SET_ADD_ASSET_LOADING',
    payload: false,
  });
};

export const getAsset = () => async (dispatch) => {
  const { data } = await service.listAssets();
  console.log('actiondata', data);
  dispatch({
    type: 'SET_ASSET_DATA',
    payload: data,
  });
};

export const setEmployeeId = (id) => async (dispatch) => {
  const { data } = await service.getEmployee(id);
  dispatch({
    type: 'SET_EMPLOYEE_DETAILS',
    payload: data,
  });
};

export const updateEmployeeData = (id, data) => async (dispatch) => {
  dispatch({
    type: 'SET_EMPLOYEE_ID',
    payload: id,
  });
};

export const getEmployeeData = (id) => async (dispatch) => {
  const { data } = await service.getEmployee(id);
  console.log('employee', data);
  dispatch({
    type: 'Employee',
    payload: data,
  });
};

export const getAssetId = (id) => async (dispatch) => {
  dispatch({
    type: 'SET_ASSET_ID',
    payload: id,
  });
  const { data } = await service.getAsset(id);
  console.log('asset', data);

  dispatch({
    type: 'Asset',
    payload: data,
  });
};

export const setLogin = (udata) => async (dispatch) => {
  const { data } = await service.userData();
  let auth = false;
  if (udata) {
    auth = validatePassword(data[0].password, udata.password);
    console.log(auth);
    if (auth) {
      dispatch({
        type: 'ADMIN_LOGIN',
        payload: auth,
      });
    }
  } else {
    dispatch({
      type: 'ADMIN_LOGIN',
      payload: auth,
    });
  }
};
export const GetEdit = (id) => async (dispatch) => {
  const { data } = await service.getEmployee(id);
  dispatch({
    type: 'EDIT_VAL',
    payload: data,
  });
};

export const updateEditEmployee = (id, data) => async (dispatch) => {
  await service.editEmployee(id, data);
  // history.push('/ListEmployee');
};

export const setAllocation = (data) => async () => {
  await service.createAllocation(data);
};

export const getAllocation = () => async (dispatch) => {
  const { data } = await service.listAllocation();
  console.log('actionlist', data);
  dispatch({
    type: 'SET_ALLOCATED_EMPLOYEE',
    payload: data,
  });
};

// export const changePassword = (values) => async (dispatch) => {
//   const { data } = await service.userData('admin');
//   if (validatePassword(data[0].Password, values.CurrentPassword)) {
//     let Password = getPasswordHashResponse(values.Password);
//     let value = {
//       Email: data[0].Email,
//       Password,
//     };
//     editUserData(`admin/${1}`, value);
//     dispatch({
//       type: 'Validation_Success',
//     });
//   } else {
//     dispatch({
//       type: 'Validation_Failed',
//     });
//   }
// };

