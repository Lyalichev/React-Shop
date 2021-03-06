class RenameText extends React.PureComponent {
  state = {
    isEdit: false,
    text: this.props.children || 'Some text'
  };

  handleClick = () => {
    this.setState({ isEdit: true });
  };

  handlerBlur = () => {
    this.setState({ isEdit: false });
  };

  handlerChange = ({ target }) => {
    this.setState({ text: target.value });
  };

  field() {
    const { textarea } = this.props;
    const { text } = this.state;

    return (
      textarea
        ? <textarea
          value={text}
          onChange={this.handlerChange}
          onBlur={this.handlerBlur}
          ref={el => this.fieldElement = el}
        >
        </textarea>
        : <input
          type="text"
          value={text}
          onChange={this.handlerChange}
          onBlur={this.handlerBlur}
          ref={el => this.fieldElement = el}
        />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isEdit && this.state.isEdit) this.fieldElement.focus();
  }

  render() {
    const { isEdit, text } = this.state;

    return (
      <>
        {
          isEdit
            ? this.field()
            : <span onClick={this.handleClick}>{text}</span>
        }
      </>
    );
  }
}

export default RenameText;
