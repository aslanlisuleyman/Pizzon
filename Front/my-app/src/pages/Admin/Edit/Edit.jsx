// import React, { useEffect, useState } from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { toast, Toaster } from 'react-hot-toast';
// import { useNavigate, useParams } from 'react-router-dom';

// function Edit() {
//   const { id } = useParams();
//   const [edit, setEdit] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3000/pizza/${id}`)
//       .then((res) => {
//         setEdit(res.data);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id]);
//   useEffect(() => {
//     formik.setValues({
//       name: edit.title || '',
//       image: edit.image || '',
//       category: edit.brand || '',
//       desc:edit.desc || '',
//       price:edit.price || ''
//     })
//   }, [edit])
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       image:  '',
//       category:   '',
//       desc:  '',
//       price: ''
//     },
//     onSubmit: values => {
//       axios.put(`http://localhost:3000/pizza/${edit._id}`, values)
//         .then(res => {
//           navigate('/admin');
//           toast.success('Updated successfully.');
//           window.location.reload()
//         })
//         .catch(error => {
//           toast.error('An error occurred while updating.');
//           console.error("Error updating data:", error);
//         });
//     },
//   });




//   return (
//     <div style={{ marginTop: "30px", minHeight: "500px" }}>
//       <div className="application"></div>
//       <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//         <form className="form" onSubmit={formik.handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.name}
//               />
//             </div>

            
//           </div>

        

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="image">Image</label>
//               <input
//                 id="image"
//                 name="image"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.image}
//               />
//             </div>

            
//           </div>

          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="image">Price</label>
//               <input
//                 id="price"
//                 name="price"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.price}
//               />
//             </div>

            
//           </div>

          
//           <div className="form-row">
           

//            <div className="form-group">
//              <label htmlFor="catagory">Desc</label>
//              <input
//                id="desc"
//                name="desc"
//                type="text"
//                onChange={formik.handleChange}
//                onBlur={formik.handleBlur}
//                value={formik.values.desc}
//              />
//            </div>


          
//          </div>
 


//           <div className="form-row">
           

//             <div className="form-group">
//               <label htmlFor="catagory">Category</label>
//               <input
//                 id="catagory"
//                 name="catagory"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.category}
//               />
//             </div>
//           </div>

//           <button className="differbtn" type="submit">Submit</button>
//         </form>
//       </div>
//       <Toaster />
//     </div>
//   );
// }

// export default Edit;


import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const [edit, setEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/pizza/${id}`)
      .then((res) => {
        setEdit(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    formik.setValues({
      name: edit.title || '',
      image: edit.image || '',
      category: edit.brand || '',
      desc: edit.desc || '',
      price: edit.price || ''
    })
  }, [edit])

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      category: '',
      desc: '',
      price: ''
    },
    onSubmit: values => {
      axios.put(`http://localhost:3000/pizza/${edit._id}`, values)
        .then(res => {
          navigate('/admin');
          toast.success('Updated successfully.');
          window.location.reload();
        })
        .catch(error => {
          toast.error('An error occurred while updating.');
          console.error("Error updating data:", error);
        });
    },
  });

  return (
    <div style={{ paddingTop: "30px",paddingBottom:'50px', minHeight: "500px", background: "linear-gradient(to right, #ffecd2, #fcb69f)" }}>
      <div className="application"></div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <form className="form" onSubmit={formik.handleSubmit} style={{ background: "white", padding: "20px",width:'400px', borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
          <div className="form-row">
            <div className="form-group">
              
              <input
               onFocus={(e) => {
                e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
              }}
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              
              <input
               onFocus={(e) => {
                e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
              }}
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
             
              <input
               onFocus={(e) => {
                e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
              }}
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              
              <input
               onFocus={(e) => {
                e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
              }}
                id="desc"
                name="desc"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desc}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              
              <input
              
               onFocus={(e) => {
                e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
              }}
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
            </div>
          </div>

          <button className="differbtn" type="submit">Submit</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Edit;
