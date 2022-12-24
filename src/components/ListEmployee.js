import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployee, setEmployeeId } from '../actions';

const ListEmployee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  const { employeeData } = useSelector((state) => state.employee);
  console.log('employeeData', employeeData);
  const columns = [
    {
      name: 'Serial Number',
      selector: (row) => row.id,
    },
    {
      name: 'Employee Name',
      selector: (row) => row.ename,
      sortable: true,
    },
    {
      name: 'Employee ID',
      selector: (row) => row.employeeid,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
    },
    {
      name: 'Phone Number',
      selector: (row) => row.phone,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Action',
      selector: (row) => (
        <div>
          <Link className="btn btn-success" to={`/EditEmployee/${row.id}`}>
            Edit
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="container m-5">
      <DataTable columns={columns} data={employeeData} pagination />
      <Link className="btn btn-primary" to="/dashboard">
        back
      </Link>
    </div>
  );
};
export default ListEmployee;
