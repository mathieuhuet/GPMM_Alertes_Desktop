import './main.css';
import Spinner from '../../Spinner'
import React, { useMemo, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import RemNetwork from '../../Components/RemNetwork/remNetwork';
import { fetchActivities } from '../../Services/activityServices/fetchActivities';
import ActivityBloc from '../../Components/ActivityBloc/activityBloc';
import { sortDataFromActivities } from '../../Utilities/sortDataFromActivities';


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
  const [activitiesStats, setActivitiesStats] = useState({
    activityGCT: '',
    activityIDS: '',
    activityPAN: '',
    activityDUQ: '',
    activityRIV: '',
    activityPCC: '',
    activityPCCR: '',
    activityMSF: '',
    numberOfBlue: 0,
    numberOfYellow: 0,
    numberOfRed: 0
  });

  useEffect(() => {
    const getActivities = async () => {
      try {
        const result = await fetchActivities(cookies.accessToken);
        setActivities(result.data);
        setActivitiesStats(sortDataFromActivities(activities));
      } catch (error) {
        console.log(error);
      }
    }
    getActivities();
  }, []);

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  useEffect(() => {
    let res = [];
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        res.push(activities[i]);
      } else if (activities[i].site.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        res.push(activities[i]);
      } else if (activities[i].system.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        res.push(activities[i]);
      } else if (activities[i].department.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        res.push(activities[i]);
      } else {
        for (let j = 0; j < activities[i].employee.length; j++) {
          if (activities[i].employee[j].toLowerCase().indexOf(search.toLowerCase()) === -1) {
            //do nothing, no match
          } else {
            //leave the loop, we found a match.
            j = activities[i].employee.length
            res.push(activities[i]);
          }
        }
      }
    }
    setResult(res);
  }, [search, activities]);
  console.log(activities);
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
          <div className='Stats'>
            <div className='Alertes'>
              Alertes en cours : 
            </div>
            <div className='Mineur'>
              Alerte Mineure : {activitiesStats.numberOfBlue}&nbsp;
              <div className='BlueCircle'>
              </div>
            </div>
            <div className='Important'>
              Alerte Importante : {activitiesStats.numberOfYellow}&nbsp;
              <div className='YellowCircle'>
              </div>
            </div>
            <div className='Urgent'>
              Alerte Urgente : {activitiesStats.numberOfRed}&nbsp;
              <div className='RedCircle'>
              </div>
            </div>
          </div>
        </div>
        {!search &&
          <RemNetwork 
            GCTColor={activitiesStats.activityGCT}
            IDSColor={activitiesStats.activityIDS}
            PANColor={activitiesStats.activityPAN}
            DUQColor={activitiesStats.activityDUQ}
            RIVColor={activitiesStats.activityRIV}
            PCCColor={activitiesStats.activityPCC}
            PCCRColor={activitiesStats.activityPCC}
            MSFColor={activitiesStats.activityMSF}
          />
        }
        {search &&
        <div className='ActivityList'>
          {result.map(activity => 
            <ActivityBloc
              title={activity.title}
              descripttion={activity.description}
              site={activity.site}
              department={activity.department}
              level={activity.level}
              type={activity.type}
              activityDate={activity.activityDate}
              acquit={activity.acquit}
              dateCreated={activity.dateCreated}
              employee={activity.employee}
              system={activity.system}
              acquitCreator={activity.acquitCreator}
              acquitDate={activity.acquitDate}
              acquitHelp={activity.acquitHelp}
              acquitEquipment={activity.acquitEquipment}
              acquitDescription={activity.acquitDescription}
              acquitResult={activity.acquitResult}
              acquitObservation={activity.acquitObservation}
              acquitComments={activity.acquitComments}
              _id={activity._id}
              creator={activity.creator}
            />
          )}
        </div>
        }
      </div>
    </div>
  )
}

export default Main;