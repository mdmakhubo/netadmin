import React, { useContext, useEffect} from 'react';
import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies, deleteMovie } from '../../context/movieContext/apiCalls';

const ProductList = () => {
    const {movies, dispatch} = useContext(MovieContext);

    const navigate = useNavigate();

    useEffect(() => {
      getMovies(dispatch)
    }, [dispatch])
    
    const handleDelete = (id) => {
      deleteMovie(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 160 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "year", headerName: "Year", width: 130 },
    { field: "isSeries", headerName: "isSeries", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // console.log(params);
        const rowId = params.row._id;
        const rowMovies = params.row;

        const handleClick = () => {
          navigate("/movie/"+ rowId, {state:{rowMovies}})
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
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default ProductList