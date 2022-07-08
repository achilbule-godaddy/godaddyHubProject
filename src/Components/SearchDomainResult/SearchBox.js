import React from 'react';
import SearchIcon from '../Logos/SearchIcon';

function SearchBox(props) {
    return (
    
            <div className="py-md-3 py-4">
        <div className="container">
            <div className="small-container">
                <div className="tld-search-form-box">
                    <div className="tld-search">
                        <form action="#">
                            <div className="tld-search-form">
                                <span className="search-ico">
                                    <SearchIcon/>
                                </span>
                                <input type="text" className="form-control" placeholder="pizza.us" value="lorem ipsum"/>
                                <button type="submit" className="search-btn btn btn-primary">
                                    <span className="search-ico">
                                        <SearchIcon/>
                                    </span>
                                    <span>Search Domains</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SearchBox;