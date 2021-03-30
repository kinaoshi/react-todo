import React from "react";

class CheckAll extends React.Component {
  render() {
    const { allCompleted } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={this.handlerChange}
        />
        全て{allCompleted ? "未完了" : "完了"}にする
      </label>
    );
  }
  handlerChange = () => {
    const { onChange, allCompleted } = this.props;
    onChange(!allCompleted);
  };
}

export default CheckAll;
