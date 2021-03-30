import React from "react";

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.handlChangeCompleted}
          />
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </div>
    );
  }
  handlChangeCompleted = () => {
    const { onChange, id, completed } = this.props;
    onChange(id, !completed);
  };
  // handlChangeCompleted = () => {
  //   console.log(this.props.completed);
  // }
}
export default Todo;
