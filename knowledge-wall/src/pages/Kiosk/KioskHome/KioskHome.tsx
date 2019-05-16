import React, { Component } from 'react';
import KioskLayout from '../../../hoc/KioskLayout/KioskLayout';
import CommitmentForm from '../../../components/CommitmentForm/CommitmentForm';

class KioskHome extends Component {
    render() {
        return (
            <KioskLayout>
                <CommitmentForm />
            </KioskLayout>
        );
    }
}

export default KioskHome;