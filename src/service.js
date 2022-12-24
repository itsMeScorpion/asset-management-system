import jsonserver from './json-server';

export default {
  //--employee--
  //List
  listEmployees: () => jsonserver.get('employees'),
  //Create
  createEmployee: (data) => jsonserver.post('employees', data),
  //update
  updateEmployee: (id, data) => jsonserver.put(`employees/${id}`, data),
  //delete
  deleteEmployee: (id) => jsonserver.delete(`employees/${id}`),
  // get
  getEmployee: (id) => jsonserver.get(`employees/${id}`),

  //--asset--
  //list
  listAssets: () => jsonserver.get('assets'),
  //Create
  createAsset: (data) => jsonserver.post('assets', data),
  //update
  updateAsset: (id, data) => jsonserver.put(`assets/${id}`, data),
  //delete
  deleteAsset: (id) => jsonserver.delete(`assets/${id}`),
  // get
  getAsset: (id) => jsonserver.get(`assets/${id}`),

  //login
  userData: (data) => jsonserver.get('admin', data),
  // editUserData:(id,data)=>jsonserver.put(`admin/${id}`),

  editEmployee: (id, data) => jsonserver.put(`employees/${id}`, data),

  //assetallocation
  createAllocation: (data) => jsonserver.post('asset-allocation', data),
  listAllocation: (data) => jsonserver.get('asset-allocation', data),
};
