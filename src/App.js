import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBox from './Components/SearchBox';
import SideMenu from './Components/SideMenu';
import MainPage from './Components/MainPage';
import PaginationNews from './Components/PaginationNews';

const myKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business");

  useEffect(() => {
  const getData = async () => {
    let baseUrl = "https://newsapi.org/v2";
    let queryPath = `/everything?q=${query}`;
    let path = "/top-headlines?country=us";
    let categoryPath = `&category=${category}`;
    let pagePath = `&page=${currentPage}`;
    let keyPath = `&apiKey=${myKey}`;
    let url = baseUrl + path + pagePath + keyPath;
    // console.log(url);
    if (query) {
      url = baseUrl + queryPath + keyPath;
    } else if (category) {
      url = baseUrl + path + categoryPath + keyPath;
    } else if (currentPage) {
      url = baseUrl + path + pagePath + keyPath;
    }

    try {
      const data = await fetch(url);
      const result = await data.json();
      setData(result);
    } catch (error) {
      setData();
    }
  };
  getData();
}, [currentPage, query, category]);


  return (
    <div className="App">
      <SearchBox setQuery={setQuery} />
      <div className="container">
      <div className="row">
        <div className="col-3">
            <SideMenu setCategory={setCategory} />
            <PaginationNews setCurrentPage={setCurrentPage}/>
        </div>

          <div className="col-9">
            <MainPage data={data} category={category} />
          </div>
      </div>
      </div>
    </div>
  );
};

export default App;

