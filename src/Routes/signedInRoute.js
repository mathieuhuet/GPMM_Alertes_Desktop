// Cannot access Login or Register page when signed in
import { Route, Routes, Navigate } from 'react-router-dom';
import User from '../Pages/User/user';
import List from '../Pages/List/list';
import ActivityDetails from '../Pages/ActivityDetails/activityDetails';
import Main from '../Pages/Main/main';




const SignedInRoute = () => {
  return (
    <Routes>
      <Route
        path="/user"
        element={<User />}
      />
      <Route
        path="/activities"
        element={<List />}
      />
      <Route 
        path="/activity/:id" 
        element={<ActivityDetails />} 
      />
      <Route 
        path="/" 
        element={<Main />} 
      />
      <Route
        path="*"
        element={<Navigate to="/" replace={true} />}
      />
    </Routes>
  )
}

export default SignedInRoute;