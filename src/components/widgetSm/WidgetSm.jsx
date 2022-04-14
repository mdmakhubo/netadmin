import React, { useState, useEffect } from 'react';
import { Visibility } from '@mui/icons-material';
import './widgetSm.scss';
import axios from 'axios';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("users?new=true");
        setNewUsers(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    getNewUser();
    
  }, [])
  

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          {
            newUsers.map(user => (
              <li key={user._id} className="widgetSmListItem">
                <img
                  src={user.profilePic || "https://cdn.drawception.com/drawings/RWDTxl2nrF.png"}
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            ))
          }

        
      </ul>
    </div>
  )
}

export default WidgetSm