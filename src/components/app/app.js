import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import styled from 'styled-components';

// const AppBlock = styled.div`
//     margin: 0 auto;
//     max-width: 800px;
// `
// const StyledAppBlock = styled(AppBlock)`
//     background-color: violet;
// `

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data: [
                {label:'Going to learn React', important: true, like: false, id: 1},
                {label:'I m going to do the splits', important: false, like: false, id: 2},
                {label:'I need increase my height!', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    searchPost(items, term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) =>{
            return item.label.indexOf(term) > -1;
        });
    }

    deleteItem(id){
        this.setState(({Data}) => {
            const index = Data.findIndex(elem => elem.id === id);

            const newArr = [...Data.slice(0, index), ...Data.slice(index + 1)];

            return {
                Data: newArr
            }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({Data}) => {
            const newArr = [...Data, newItem];
            return {
                Data: newArr
            }
        });
    }

    onToggleImportant(id){
        this.setState(({Data}) => {
            const index = Data.findIndex(elem => elem.id === id);

            const old = Data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...Data.slice(0, index), newItem,  ...Data.slice(index + 1)];

            return {
                Data: newArr
            }
        })
    }

    onToggleLiked(id){
        this.setState(({Data}) => {
            const index = Data.findIndex(elem => elem.id === id);

            const old = Data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...Data.slice(0, index), newItem,  ...Data.slice(index + 1)];

            return {
                Data: newArr
            }
        })
    }

    onUpdateSearch(term){
        this.setState({term});
    }

    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter){
        this.setState({filter});
    }
   

        render(){
        const {Data, term, filter} = this.state;
        const liked = Data.filter(item => item.like).length;
        const allPosts = Data.length;
        const visiblePosts = this.filterPost(this.searchPost(Data, term), filter);

            return (
                <div className = "app">
                    <AppHeader
                    liked={liked}
                    allPosts = {allPosts}
                    />
                    <div className = "search-panel d-flex">
                        <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}/>
                        <PostStatusFilter
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect}/>
                    </div>
                    <PostList 
                        posts = {visiblePosts}
                        onDelete = {this.deleteItem}
                        onToggleImportant = {this.onToggleImportant}
                        onToggleLiked = {this.onToggleLiked}/>
                    <PostAddForm
                        onAdd = {this.addItem}
                    />
                </div>
            )
        }
    }



