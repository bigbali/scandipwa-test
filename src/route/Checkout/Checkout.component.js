import CheckoutProgress from 'Component/CheckoutProgress';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import 'SourceRoute/Checkout/Checkout.style';
import './Checkout.override.style.scss'

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    render() {
        return (
            <>
                <CheckoutProgress
                    steps={this.stepMap}
                    currentStep={this.stepMap[this.props.checkoutStep]}
                    history={this.props.history}
                />
                {super.render()}
            </>
        )
    }
}

export default Checkout;