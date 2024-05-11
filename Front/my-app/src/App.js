import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
import MainContext from './context/context';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
import axios from "axios"
const router = createBrowserRouter(Routes);
function App() {


  const[data,setData]=useState([])
  const[filter,setFilter]=useState([])
  // const[user,setUser]=useState([])
  const[all,setAll]=useState([])
  const[filterAll,setFilterAll]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState({})
  const[wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  const[basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  const [homeCounter,setHomeCounter]=useState(localStorage.getItem("counter")? Math.max(0,parseInt(localStorage.getItem("counter"))):0)
   
  useEffect(()=>{
    axios.get("http://localhost:3000/pizza").then(res=>{
      setData(res.data)
      setFilter(res.data)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setError(error)
    })
    },[])




    const deleteHandler=(id)=>{
      axios.delete(`http://localhost:3000/pizza/${id}`).then(res=>{
        setData([...res.data])
        setFilter([...res.data])
      })
    }

   
  useEffect(()=>{
    axios.get("http://localhost:3000/all").then(res=>{
      setAll(res.data)
      setFilterAll(res.data)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setError(error)
    })
    },[])


    const deleteBasket=(id)=>{
      const target=basket.find(items=>items._id==id)
      basket.splice(basket.indexOf(target),1)
      setWishlist([...basket])
      localStorage.setItem("basket",JSON.stringify([...basket]))
      setHomeCounter(homeCounter - target.count);
      localStorage.setItem("counter", homeCounter - target.count);

    }
  
    const addBasket=(item)=>{
      const target=basket.find(pro=>pro._id==item._id)
      if(!target){
        const newItem={...item,count:1,totalPrice:item.price}
        setBasket([...basket,newItem])
        setHomeCounter(homeCounter+1)
        localStorage.setItem("counter",homeCounter+1)
        localStorage.setItem("basket",JSON.stringify([...basket,newItem]))
        // toast.success("Əlavə olundu", { zIndex: 121212999999999 })
        toast.success("Item added to cart successfully", {
          position: "center", // Adjusted position to lowercase "center"
          zIndex: 121212999999999 
        });
      
      } else{
        const newData={...item,count:target.count+1,totalPrice:item.price*(target.count+1)}
        setHomeCounter(homeCounter+1)
        localStorage.setItem("counter",homeCounter+1)
        setBasket([...basket.filter(pro=>pro._id != item._id),newData])
        localStorage.setItem("basket",JSON.stringify([...basket.filter(pro=>pro._id != item._id),newData]))
        toast.success("Item added to cart successfully", {
          position: "center", // Adjusted position to lowercase "center"
          zIndex: 121212999999999 
        });
  
      }
    }
    const handleInc=(item)=>{
      const target=basket.find(pro=>pro._id==item._id)
      target.count += 1
      target.totalPrice=item.price*target.count
      setBasket([...basket])
      localStorage.setItem("basket",JSON.stringify([...basket]))
      setHomeCounter(homeCounter+1)
      localStorage.setItem("counter",homeCounter+1)
  
  
    }
  
    const handleDec=(item)=>{
      const target=basket.find(pro=>pro._id==item._id)
      let updatedata=[...basket.filter(pro=>pro._id==item._id)]
      if(target.count>1){
        target.count -= 1
        setHomeCounter(homeCounter - 1);
        localStorage.setItem("counter", homeCounter - 1);
        target.totalPrice=item.price*target.count
        setBasket([...basket])
        localStorage.setItem("basket",JSON.stringify([...basket]))
      }
      
    }

    const searchHandler=(searchValue)=>{
      if(searchValue){
        setFilter([...data.filter(item=>item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
      }else{
        setFilter([...data])
      }
    }
  
    const sortprice=()=>{
      setFilter([...data.sort((a,b)=>b.price-a.price)])
    }
    const sortAz=()=>{
      setFilter([...data.sort((a,b)=>a.title.localeCompare(b.title))])
    }
  
  const sortZa=()=>{
      setFilter([...data.sort((a,b)=>b.title.localeCompare(a.title))])
    }
  

    const handleButtonClick = (endpoint) => {
      setLoading(true);
      axios.get(`http://localhost:3000/${endpoint}`)
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    };
    
  const datas={
    data,setData,filter,setFilter,wishlist,setWishlist,basket,setBasket,loading,setLoading,error,setError,
    all,setAll,filterAll,setFilterAll,handleButtonClick,handleDec,handleInc,addBasket,deleteBasket,searchHandler,sortprice,sortAz,sortZa,
    homeCounter,deleteHandler

  }

  return (
    <>
    
 <MainContext.Provider value={datas}>

      <RouterProvider router={router} />
      
    </MainContext.Provider>
    <Toaster />
    
    </>
  );
}

export default App;
