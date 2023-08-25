import './activityDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


  /*
  Single device details page.
  There's 3 tab. 
  Graph
  LiveData
  More

  Graph let you see a graph of past data of the device so you can monitor the performance.
  You can add other devices to the graph to compare the performance between them

  LiveData fetch the livedata of the device.

  More. you can update the values (ip port name ect) of the devices
  View who created the device and some live data
  You can also delete the device.
  */





function ActivityDetails() {
  const { id } = useParams();
  const [ page, setPage ] = useState('details');
  let navigate = useNavigate();

  useEffect(() => {

  }, [id]);


  return (
    <div className='AppContainer'>
      <ToastContainer />
      <div className='DeviceDetails'>
        <div className='DeviceDetailsTop'>
          <div className='GoBack' onClick={goBack}>
            <BsArrowLeftShort />
          </div>
          <div className='DeviceDetailsName' onClick={goDetails}>
          </div>
          <div className='GoGraph Tab' onClick={goDetails}>
            Graph
          </div>
          <div className='GoLiveData Tab' onClick={goAcquit}>
            Live Data
          </div>
          <div className='GoMore Tab' onClick={goComments}>
            More
          </div>
        </div>
        <div className='DeviceDetailsBottom'>
          {page === 'details' ? <Details /> : page === 'live' ? <Acquit /> : page === 'more' ? <Comments /> : <Details />}
        </div>
      </div>
    </div>
  );

  function goBack () {
    navigate('/');
  }


  function goDetails () {
    setPage('details')
  }

  function goAcquit () {
    setPage('acquit')
  }

  function goComments () {
    setPage('comments')
  }





  function Details () {

    return (
      <div>

      </div>
    )
  }

  function Acquit () {
    return (
      <div>

      </div>
    )
  }

  function Comments () {
    return (
      <div>

      </div>
    )
  }
}

export default ActivityDetails;