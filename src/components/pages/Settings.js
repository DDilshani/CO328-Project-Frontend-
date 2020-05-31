import React, { Component } from 'react'
import Sidebar from '../settings_components/Sidebar'
import AccountDetails from '../settings_components/AccountDetails'
import PrivacyDetails from '../settings_components/PrivacyDetails'


class Settings extends Component {

    state = {
        step: 1,
    }

    nextStep = (step) => {
        this.setState({
           step: step
        });
     }
  

    render() {
        const { step } = this.state;
        switch(step) {
            case 1:
            return (
                <div className="settings">
                    <Sidebar nextStep = {this.nextStep} />
                    <div className="content">
                        <AccountDetails />
                    </div>
                </div>
            )
            case 2:
                return (
                    <div className="settings">
                        <Sidebar nextStep = {this.nextStep} />
                        <div className="content">
                            <PrivacyDetails />
                        </div>
                    </div>
                )

         }
     }
}

export default Settings;
