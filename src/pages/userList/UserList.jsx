import React,{useEffect, useContext} from 'react';
import './userList.scss';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { UserContext } from '../../context/userContext/UserContext';
import { getUsers, deleteUser } from '../../context/userContext/apiCalls';

const UserList = () => {
   const {users, dispatch} = useContext(UserContext);

   const navigate = useNavigate();

    useEffect(() => {
      getUsers(dispatch)
    }, [dispatch])
    
    const handleDelete = (id) => {
      deleteUser(id, dispatch)
  };

    const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "lastUpdated",
      headerName: "Last Updated",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.updatedAt}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const rowId = params.row._id;
        const rowUsers = params.row;

        const handleClick = () => {
          navigate("/user/"+ rowId, {state:{rowUsers}})
        }

        return (
          <>
              <button onClick={() => handleClick()} className="userListEdit">Edit</button>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
        <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default UserList