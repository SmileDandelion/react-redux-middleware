import React, {Component} from  'react';
export default class Footer extends Component {
    filter(filterName) {
        this.props.filter(filterName);
    }

    render() {
        return <div>
            <button onClick={this.filter.bind(this, 'ALL')}>all</button>
            <button onClick={this.filter.bind(this, 'ACTIVE')}>active</button>
            <button onClick={this.filter.bind(this, 'COMPLETED')}>completed</button>
        </div>
    }
}