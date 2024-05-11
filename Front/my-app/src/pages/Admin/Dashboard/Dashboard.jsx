// // import React, { useContext } from 'react'
// // import MainContext from '../../../context/context'
// // import "./Dashboard.scss"
// // import { useNavigate } from 'react-router'
// // import { useHistory } from 'react-router-dom';
// // import { Link } from 'react-router-dom'
// // import LoginAdmin from './LoginAdmin'; // Import the LoginAdmin component
// // const Dashboard = () => {
// //   const {filter,setFilter,deleteHandler}=useContext(MainContext)
// //   const navigate = useNavigate();
  
// //   const history = useHistory();
// //   const [authenticated, setAuthenticated] = useState(false);

// //   // Your authentication logic can go here
// //   // For simplicity, let's assume the user is authenticated if authenticated state is true

// //   const handleLogout = () => {
// //     // You can implement logout logic here
// //     // For simplicity, let's just set authenticated to false and redirect to login page
// //     setAuthenticated(false);
// //     history.push('/admin/login');
// //   };
  
// //   return (
// //     <div className='boar'>
// //           <table class="table">
// //   <thead>
// //     <tr>
// //     <th style={{paddingLeft:'10px'}} scope="col">Id</th>
// //       <th style={{paddingLeft:'32px'}} scope="col">Image</th>
// //       <th style={{paddingLeft:'50px'}} scope="col">Name</th>
// //       <th style={{paddingLeft:'25px'}} scope="col">Price</th>
// //       <th style={{paddingLeft:'28px'}} scope="col">Edit</th>
// //       <th  style={{paddingLeft:'28px'}} scope="col">Delete</th>

// //     </tr>
// //   </thead>
// //   <tbody>
// //     { filter.map((item,index)=>{
// //         return(
// //             <tr key={index}>
// //            <td>{item._id.slice(0,5)}</td>     
// //       <td><img src={item.image} alt="" /></td>
// //       <td>{item.title}</td>
// //       <td>${item.price}.00</td>
// //       <td><Link  to={`Edit/${item._id}`}  className='btn btn-warning'>Edit</Link></td>
      
// //       <td><button onClick={()=>{
// //         deleteHandler(item._id)
// //       }} className='btn btn-danger'>Delete</button></td>
// //     </tr>
// //         )
// //     })}
    
   
// //   </tbody>
// // </table>
// //     </div>
// //   )
// // }

// // export default Dashboard


// import React, { useContext, useState } from 'react';
// import MainContext from '../../../context/context';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import "./Dashboard.scss";
// import { Link } from 'react-router-dom';
// import LoginAdmin from '../AdminLogin/LoginAdmin'; // Import the LoginAdmin component

// const Dashboard = () => {
//   const { filter, deleteHandler } = useContext(MainContext);
//   const navigate = useNavigate(); // Replace useHistory with useNavigate
//   const [authenticated, setAuthenticated] = useState(false);

//   const handleLogout = () => {
//     setAuthenticated(false);
//     navigate('/admin/login'); // Use navigate instead of history.push
//   };

//   return (
//     <div className='boar'>
//       {authenticated ? (
//         <div>
//           <button onClick={handleLogout}>Logout</button>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th style={{ paddingLeft: '10px' }} scope="col">Id</th>
//                 <th style={{ paddingLeft: '32px' }} scope="col">Image</th>
//                 <th style={{ paddingLeft: '50px' }} scope="col">Name</th>
//                 <th style={{ paddingLeft: '25px' }} scope="col">Price</th>
//                 <th style={{ paddingLeft: '28px' }} scope="col">Edit</th>
//                 <th style={{ paddingLeft: '28px' }} scope="col">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filter.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{item._id.slice(0, 5)}</td>
//                     <td><img src={item.image} alt="Product" /></td>
//                     <td>{item.title}</td>
//                     <td>${item.price}.00</td>
//                     <td><Link to={`Edit/${item._id}`} className='btn btn-warning'>Edit</Link></td>
//                     <td><button onClick={() => { deleteHandler(item._id) }} className='btn btn-danger'>Delete</button></td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <LoginAdmin setAuthenticated={setAuthenticated} />
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useContext, useState } from 'react';
// import MainContext from '../../../context/context';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import "./Dashboard.scss";
// import { Link } from 'react-router-dom';
// import LoginAdmin from '../AdminLogin/LoginAdmin'; // Import the LoginAdmin component

// const Dashboard = () => {
//   const { filter, deleteHandler } = useContext(MainContext);
//   const navigate = useNavigate(); // Replace useHistory with useNavigate
//   const [authenticated, setAuthenticated] = useState(false);

  

//   if (!authenticated) {
//     return <LoginAdmin setAuthenticated={setAuthenticated} />;
//   }

//   return (
//     <div className='boar'>
      
//       <table className="table">
//         <thead>
//           <tr>
//             <th style={{ paddingLeft: '10px' }} scope="col">Id</th>
//             <th style={{ paddingLeft: '32px' }} scope="col">Image</th>
//             <th style={{ paddingLeft: '50px' }} scope="col">Name</th>
//             <th style={{ paddingLeft: '25px' }} scope="col">Price</th>
//             <th style={{ paddingLeft: '28px' }} scope="col">Edit</th>
//             <th style={{ paddingLeft: '28px' }} scope="col">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filter.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{item._id.slice(0, 5)}</td>
//                 <td><img src={item.image} alt="Product" /></td>
//                 <td>{item.title}</td>
//                 <td>${item.price}.00</td>
//                 <td><Link to={`Edit/${item._id}`} className='btn btn-warning'>Edit</Link></td>
//                 <td><button onClick={() => { deleteHandler(item._id) }} className='btn btn-danger'>Delete</button></td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../../../context/context';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.scss";
import { Link } from 'react-router-dom';
import LoginAdmin from '../AdminLogin/LoginAdmin';

const Dashboard = () => {
    const { filter, deleteHandler } = useContext(MainContext);
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated on component mount
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';
        setAuthenticated(isAuthenticated);
    }, []);

    const handleLogout = () => {
        // Clear authentication state and redirect to login page
        localStorage.removeItem('authenticated');
        setAuthenticated(false);
        navigate('/admin');
    };

    return (
        <div className='boar'>
            {authenticated ? (
              <div>

<button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                 <table className="table">
                        <thead>
                          <tr>
                            <th style={{ paddingLeft: '10px' }} scope="col">Id</th>
                             <th style={{ paddingLeft: '32px' }} scope="col">Image</th>
                            <th style={{ paddingLeft: '50px' }} scope="col">Name</th>
                            <th style={{ paddingLeft: '25px' }} scope="col">Price</th>
                           <th style={{ paddingLeft: '28px' }} scope="col">Edit</th>
                           <th style={{ paddingLeft: '28px' }} scope="col">Delete</th>
                         </tr>
                         </thead>
                        <tbody>
                           {filter.map((item, index) => {
                             return (
                               <tr key={index}>
                                 <td>{item._id.slice(0, 5)}</td>
                                 <td><img src={item.image} alt="Product" /></td>
                                 <td>{item.title}</td>
                                 <td>${item.price}.00</td>
                                 <td><Link to={`Edit/${item._id}`} className='btn btn-warning'>Edit</Link></td>
                                 <td><button onClick={() => { deleteHandler(item._id) }} className='btn btn-danger'>Delete</button></td>
                               </tr>
                             )
                           })}
                         </tbody>
                       </table>

              </div>
              
            ) : (
                <LoginAdmin setAuthenticated={setAuthenticated} />
            )}
        </div>
    );
};

export default Dashboard;

