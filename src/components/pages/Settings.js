import React, { Component } from 'react'
import Sidebar from '../settings_components/Sidebar'
import AccountDetails from '../settings_components/AccountDetails'


class Settings extends Component {

    state = {
        step: 1,
    }

    render() {
        const { step } = this.state;
        switch(step) {
            case 1:
            return (
                <div className="settings">
                    <Sidebar />
                    <div className="content">
                        <AccountDetails />
                    </div>
                </div>
            )

         }
     }
}

export default Settings;
