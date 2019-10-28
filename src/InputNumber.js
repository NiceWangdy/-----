import PropTypes from "prop-types";
import React, {Component} from "react";

class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerValue: ''
        }
    }

    static propTypes = {
        // value: PropTypes.string,
        defaultValue: PropTypes.string,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        // value: '',
    }

    //  是否为受控组件
    get isControl() {
        return 'value' in this.props
    }

    get value() {
        if (this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.value}
                    onChange={(e) => {
                        console.log(this.isControl)
                        if (!this.isControl) {
                            this.setState({
                                innerValue: e.target.value
                            })
                        }
                        this.props.onChange(e)
                    }}
                />
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }
}

export default InputNumber
