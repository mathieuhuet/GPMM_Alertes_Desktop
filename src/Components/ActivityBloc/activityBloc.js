import './activityBloc.css';
import { Link } from 'react-router-dom';
import { getDepartmentOptions } from '../../Utilities/departmentOptions';
import { getLevelOptions } from '../../Utilities/levelOptions';
import { getTypeOptions } from '../../Utilities/typeOptions';


/*
List all the devices on screen and fetch the live data of all of them.
*/

/*
props.acquit 
props.activityDate 
props.dateCreated
props.department
props.description
props.employee
props.level
props.site
props.system
props.title
props.type
*/


function ActivityBloc (props) {
  return (
    <div className='Activity'>
      <div className='Top'>
        <div className='TopLeft'>
          <b>{props.title}</b>
        </div>
        <div className='TopRight'>
          Créé : <b>{new Date(props.activityDate).toLocaleDateString()}</b> {new Date(props.activityDate).toLocaleTimeString().slice(0, 4)}{new Date(props.activityDate).toLocaleTimeString().slice(8)}
        </div>
      </div>
      <div className='Middle'>
        <div className='MiddleLeft'>
          Département : <b>{getDepartmentOptions(props.department)}</b>
        </div>
        <div className='MiddleRight'>
          {getTypeOptions(props.type)}
        </div>
      </div>
      <div className='Bottom'>
        <div className='BottomLeft'>
          Site de travail : <b>{props.site}</b>
        </div>
        <div className='BottomRight'>
          <b>{getLevelOptions(props.level)}</b>
        </div>
      </div>
    </div>
  );
}

export default ActivityBloc;