import React, { Component } from "react";
import "./app.css";
import Header from "./components/app-header/app-header";
import PostAddForm from "./components/post-add-form/post-add-form";
import SearchPanel from "./components/search-panel/search-panel";
import PostStatusFilter from "./components/post-status-filter/post-status-filter";
import PostList from "./components/post-list/post-list";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "I am going to learn React",
          important: true,
          like: false,
          id: 1,
        },
        { label: "It is so good", important: false, like: false, id: 2 },
        { label: "I need break...", important: false, like: false, id: 3 },
      ],
      term: " ",
      filter: "all",
    };
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLikes = this.onToggleLikes.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxID = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      // data.splice(index, 1);
      // return {
      //   data: data,
      // };

      const newArr = [...data.splice(0, index), ...data.splice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  addItem(text) {
    const newItem = {
      label: text,
      important: false,
      id: this.maxID++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.splice(0, index),
        newItem,
        ...data.splice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  onToggleLikes(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.splice(0, index),
        newItem,
        ...data.splice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  searchItem(items, term) {
    if (term === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.includes(term);
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  filterPosts(items, filter) {
    if (filter === "like") {
      items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;

    const likes = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchItem(data, term), filter);

    return (
      <div className="app">
        <Header likes={likes} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleLikes={this.onToggleLikes}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

// const Header = () => {
//   return <h2>Hello, World!</h2>;
// };

// const Field = () => {
//   return <input placeholder="Text here" />;
// };

// const Btn = () => {
//   // const text = "Log in";
//   const logged = false;
//   const logIn = () => {
//     return "Log in, please";
//   };
//   const signIn = () => {
//     return "Sign in, please";
//   };
//   return <button>{logged ? logIn() : signIn()}</button>;
// };
