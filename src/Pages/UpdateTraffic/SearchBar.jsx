import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

function SearchBar({placeholder, data}){
    return(
        <div className = "tsearch">
            <div className = "tsearchInputs">
                <input type = "text" placeholder = {placeholder}/>
                <div className = "tsearchIcon">
                    <IconButton>
                        <SearchIcon style = {{fill: "orange"}}/>
                    </IconButton>
                </div>
            </div>
            <div className = "tsearchResult"></div>
        </div>
    )
}

export default SearchBar;