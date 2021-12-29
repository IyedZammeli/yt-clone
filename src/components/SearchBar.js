import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const SearchBar = () => (
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
        );
        return (
            <div>
               <SearchBar /> 
            </div>
        )
    }
}
