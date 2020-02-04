import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        // this._toggleMenu = this._toggleMenu.bind(this);

    }



    render() {
        return (
            this.state.isOpen ?
                <React.Fragment>

                    <a onClick={this._toggleMenu}>🥞</a>
                    <ul>
                        {
                            this.props.linkNames.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </React.Fragment>
                :
                <a onClick={this._toggleMenu}>🍔</a>

        )
    }

    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled')
        });

    }

}

export default Nav;