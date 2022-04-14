import React, { useContext, useEffect} from 'react';
import './listList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { ListContext } from '../../context/listContext/ListContext'; 
import { getLists, deleteList } from '../../context/listContext/apiCalls'; 

const ListList = () => {
    const {lists, dispatch} = useContext(ListContext);

    const navigate = useNavigate();

    useEffect(() => {
      getLists(dispatch)
    }, [dispatch])
    
    const handleDelete = (id) => {
      deleteList(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    { field: "title", headerName: "Title", width: 230 },
    { field: "genre", headerName: "Genre", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        const rowId = params.row._id;
        const rowList = params.row;

        const handleClick = () => {
          navigate("/list/"+ rowId, {state:{rowList}})
        }

        return (
          <>
              <button onClick={() => handleClick()} className="productListEdit">Edit</button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="listList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default ListList