import React from 'react';
import BlackNavigation from '../Assets/BlackNavigation';
import SearchBox from './SearchBox';
import HomeFooter from '../Assets/Footer/HomeFooter'
import ProcessBar from './ProcessBar';

function SearchDomainResult(props) {
    return (
        <>
        <BlackNavigation/>
        <SearchBox/>
        <ProcessBar/>
        <HomeFooter/>
        </>

    );
}

export default SearchDomainResult;