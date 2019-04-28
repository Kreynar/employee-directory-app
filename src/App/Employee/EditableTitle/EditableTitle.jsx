import React from "react";

import "./EditableTitle.scss";

const editIconPath = process.env.PUBLIC_URL + "/assets/edit.png";
const okIconPath = process.env.PUBLIC_URL + "/assets/ok.ico";
const cancelIconPath = process.env.PUBLIC_URL + "/assets/x.png";

export default class EditableTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: props.title
    };
    this.titleRef = React.createRef();
  }

  focusTitleInput = () => {
    this.titleRef.current.focus();
    this.titleRef.current.select();
  };

  onChange = event => this.setState({ newTitle: event.target.value });

  cancelEdit = () => {
    this.setState({ newTitle: this.props.title });
  };

  onSubmit = event => {
    event.preventDefault();
    event.target.title.blur();
    const newTitleTrimmed = this.state.newTitle.trim();
    this.setState({ newTitle: newTitleTrimmed }, () => {
      if (this.state.newTitle !== this.props.title) {
        this.props.onTitleUpdate(this.state.newTitle);
      }
    });
  };

  render() {
    const { title } = this.props;
    const { newTitle } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="editable-title">
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          value={newTitle}
          ref={this.titleRef}
          className="employee-title-input"
        />
        {newTitle !== title ? (
          <>
            <input
              type="image"
              src={okIconPath}
              alt="Save"
              className="employee-title-save"
            />
            <img
              onClick={this.cancelEdit}
              src={cancelIconPath}
              alt="Cancel"
              className="employee-title-cancel"
            />
          </>
        ) : (
          <img
            onClick={this.focusTitleInput}
            src={editIconPath}
            alt="Edit"
            className="employee-title-edit"
          />
        )}
      </form>
    );
  }
}
