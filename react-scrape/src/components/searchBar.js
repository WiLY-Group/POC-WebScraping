import React, { useState } from "react";
import env from "react-dotenv";
import axios from 'axios';
const SearchBar = (props) => {

    const key = env.usda_key;

    const params = {"api_key": key, "pageSize": 25};

    const [searchItem, setSearchItem] = useState("");

    const url = "https://api.nal.usda.gov/fdc/v1/foods/search";

    const search = (e) => {
        console.log("Button pressed");
        console.log(key);
        console.log(searchItem);
        params.query = searchItem;
        axios.get(url, {params: params})
            .then(res=>props.setResults(res.data.foods))
            .catch(err=>console.log(err));
    }

    const enterText = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div>
            <input onChange={enterText}></input> <button onClick={search}>Search</button>
        </div>
    )

}

export default SearchBar;