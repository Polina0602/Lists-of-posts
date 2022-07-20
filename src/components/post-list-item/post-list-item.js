import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
  // все переносим в app
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false,
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }

  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important,
  //   }));
  // }

  // onLike() {
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }));
  // }

  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLikes,
      important,
      like,
    } = this.props;
    // const { important, like } = this.state;

    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span onClick={onToggleLikes} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button onClick={onDelete} type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    );
  }
}

// const PostListItem = (props) => {
//   let classNames = "app-list-item d-flex justify-content-between";

//   if (props.important == true) {
//     classNames += " important";
//   }
//   return (
//     <div className={classNames}>
//       <span className="app-list-item-label">{props.label}</span>
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-star btn-sm">
//           <i className="fa fa-star"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fa fa-trash"></i>
//         </button>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//     </div>
//   );
// };

// export default PostListItem;
