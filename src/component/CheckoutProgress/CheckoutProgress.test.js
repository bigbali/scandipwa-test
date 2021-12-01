import React from 'react';
import { render, screen } from '@testing-library/react';
import './CheckoutProgress.component'
import '@testing-library/jest-dom/extend-expect';
import CheckoutProgress from '.';


test('check if we have step checkpoints', () => {
    const stepMap = { "SHIPPING_STEP": { "title": "Shipping step", "url": "/shipping", "areTotalsVisible": true }, "BILLING_STEP": { "title": "Billing step", "url": "/billing", "areTotalsVisible": true }, "DETAILS_STEP": { "title": "Thank you for your purchase!", "url": "/success", "areTotalsVisible": false } };

    render(
        <CheckoutProgress
            steps={stepMap}
            currentStep={{ "BILLING_STEP": { "title": "Billing step", "url": "/billing", "areTotalsVisible": true } }}
        // history={this.props.history}
        />
    );

    expect(document.querySelector('.checkpoint')).toBeInTheDocument();
    expect(document.querySelector('.checkpoint.active')).toBeInTheDocument();
});