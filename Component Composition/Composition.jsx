var ChildComponent = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.message}
            </div>
        )
    }
});

var ParentComponent = React.createClass({
    getInitialState: function () {
        return {
            value: "Intial Value"
        }
    },

    updateMessage: function () {
        var updated_value = this.refs.textValue.value;
        this.setState({
            value: updated_value
        });
    },

    render: function () {
        return (
            <div>
                < ChildComponent message="Iam child" />
                This is parent component
				<div>
                    {this.state.value}<br />
                    <input type="text" ref="textValue" placeholder="enter text" />
                    <input type="button" onClick={this.updateMessage} value="Click to update" />
                </div>
            </div>
        )
    }
});

ReactDOM.render(<ParentComponent />, document.getElementById("view"));