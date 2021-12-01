import CheckoutProgress from 'Component/CheckoutProgress';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import 'SourceRoute/Checkout/Checkout.style';
import './Checkout.override.style.scss'

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    render() {
        this.stepMap.BILLING_STEPX = this.stepMap.BILLING_STEP
        this.stepMap.BILLING_STEPY = this.stepMap.BILLING_STEP
        this.stepMap.BILLING_STEPZ = this.stepMap.BILLING_STEP


        return (
            <>
                <CheckoutProgress
                    steps={this.stepMap}
                    currentStep={this.stepMap[this.props.checkoutStep]}
                    history={this.props.history}
                // Pass history so we can redirect
                />
                {super.render()}
            </>
        )
    }
}

export default Checkout;