import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@mui/icons-material';
import './list.scss';


const List = () => {
    const location = useLocation();
    const list = location.state.rowList;

    // console.log(movie);

  return (
    <div className="list">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey prodId">id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{list.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{list.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={list.title} />
                  <label>In Stock</label>
                  <input type="text" placeholder={list.year} />
                  <label>Genre</label>
                  <input type="text" placeholder={list.genre} />
                  <label>Limit</label>
                  <input type="text" placeholder={list.limit} />
                  <label>Trailer</label>
                  <input type="file" placeholder={list.trailer} />
                  <label>Video</label>
                  <input type="file" placeholder={list.video} />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={list.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default List