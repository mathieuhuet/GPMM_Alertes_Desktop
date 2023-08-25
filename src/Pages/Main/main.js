import './main.css';
import Spinner from '../../Spinner'
import React, { useMemo, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import RemNetwork from '../../Components/RemNetwork/remNetwork';
import { fetchActivities } from '../../Services/activityServices/fetchActivities.ts';
import ActivityBloc from '../../Components/ActivityBloc/activityBloc';


/*
The Main Page of the App

With a Map where you can see all the device being monitored.

Weather Button on the bottom-right to display weather forecast
*/

function Main() {
  const [cookies] = useCookies(['accessToken']);
  let navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getActivities = async () => {
      try {
        const result = await fetchActivities(cookies.accessToken);
        setActivities(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getActivities();
  }, [cookies.accessToken])

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  // useEffect(() => {
  //   let res = [];
  //   for (let i = 0; i < activities.length; i++) {
  //     if (activities[i].institution.toLowerCase().indexOf(search.toLowerCase()) === -1) {
  //       for (let j = 0; j < activities[i].languages.length; j++) {
  //         if (activities[i].languages[j].toLowerCase().indexOf(search.toLowerCase()) === -1) {
  //           //do nothing, no match
  //         } else {
  //           //leave the loop, we found a match.
  //           j = activities[i].languages.length
  //           res.push(activities[i]);
  //         }
  //       }
  //     }
  //     else {
  //       res.push(activities[i]);
  //     }
  //   }
  //   setResult(res);
  // }, [search, activities])
  return(
    <div className='App'>
      <div>
        <Navbar/>
      </div>
      <div className='SearchSection'>
        <div className='ActivitySearch'>
          <div>
            <input 
              type="text" 
              value={search} 
              onChange={handleChangeSearch} 
              placeholder='Rechercher...'
              className='SearchBar'
            />
          </div>
        </div>
        {!search &&
          <RemNetwork />
        }
        {search &&
        <div className='ActivityList'>
          {activities.map(activity => 
            <ActivityBloc
              title={activity.title}
              descripttion={activity.description}
              site={activity.site}
              department={activity.department}
              level={activity.level}
              type={activity.type}
              activityDate={activity.activityDate}
            />
          )}
        </div>
        }
      </div>
    </div>
  )
}

export default Main;