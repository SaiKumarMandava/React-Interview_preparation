import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userSelector,deleteUser,fetchCurrentUser } from "../redux/users";
import "./user.css";
export default function Users() {
  const { users, loading, error,currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filterUser = users?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  || item.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="titleHead">Users Data</h1>
      <div className="search">
        <input type="search" onChange={handleSearch} />
      </div>{" "}
      <div className="tableSection">
        {loading ?( <p>loading...</p>) : error?(<p>{error}</p>):
        
        <table className="tableContainer">
        <tr className="tableHead">
          <th className="tablHeadData">ID</th>
          <th className="tablHeadData">Name</th>
          <th className="tablHeadData">Email</th>
          <th className="tablHeadData">Phone</th>
          <th className="tablHeadData">User Name</th>
          <th className="tablHeadData">Website</th>
          <th className="tablHeadData">View</th>
          <th className="tablHeadData">Delete</th>
        </tr>
        <tbody>
          {filterUser?.length > 0 ? (
            filterUser?.map((item, index) => (
              <tr key={index} className="trBody">
                <td className="trData">{index + 1}</td>
                <td className="trData">{item.name}</td>
                <td className="trData">{item.email}</td>
                <td className="trData">{item.phone}</td>
                <td className="trData">{item.username}</td>
                <td className="trData">
                    <span>
                        {/* {item.website} */}
                        <a href={item.website} target="blank"
                        style={{textDecoration: 'none'}}
                        >
                            Website
                         </a>
                        </span>
                    
                    </td>
                <td 
                onClick={(e)=>{
                    e.stopPropagation();
                    console.log("Clicked on view", item?.id);
                  
                    dispatch(fetchCurrentUser(item?.id))
                }}
                
                className="trData" style={{ cursor: "pointer" }}>
                  View
                </td>
                <td 
                onClick={(e)=>{
                    e.stopPropagation();
                    console.log("Clicked on delete", item?.id);
                    dispatch(deleteUser(item?.id))}}
                className="trData" style={{ cursor: "pointer" }}>
                  Delete
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="noData">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
        }
        {/* {error && <p>{error}</p>} */}
       
      </div>
    </div>
  );
}
