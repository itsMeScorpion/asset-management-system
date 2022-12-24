import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAsset, getAssetId } from '../actions';

const ListAsset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsset());
  }, []);
  const { assetData } = useSelector((state) => state.asset);
  console.log('assetData', assetData);
  const dataListing = assetData.map((data, index) => {
    return (
      <div className="card mt-5" key={index} style={{ width: '18rem',marginLeft:'3%' }}>
        <img className="card-img-top" src={data.image} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-3">
      <h3>Asset list</h3>
      <Link type="button" className="btn btn-secondary" to="dashboard">
        Back
      </Link>
      <div className="d-flex"> {dataListing}</div>
    </div>
  );
};
export default ListAsset;
