import React, { Component } from "react";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttons = [
      { name: "all", label: "All" },
      { name: "like", label: "I like it" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const btn_class = active ? "btn-info" : "bth-outline-secondary";
      return (
        <button
          onClick={(name) => onFilterSelect}
          key={name}
          type="button"
          className={`btn ${btn_class}`}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
