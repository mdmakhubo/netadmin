import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './home.scss';

const Home = () => {
  const MONTHS = useMemo(() => 
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],[]
  );

    const [userStats, setUserStats] = useState([]);
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await axios.get("users/stats");
          const statsList = res.data.sort((a,b) => {
            return a._id - b._id
          })

          statsList.map(item => setUserStats(prev => [...prev,{name:MONTHS[item._id - 1], "New User":item.total}]))
        } catch (error) {
          console.log(error);
        }
      };

      getStats();
    }, [MONTHS])
    //  console.log(userStats);

  return (
    <div className='home'>        
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home