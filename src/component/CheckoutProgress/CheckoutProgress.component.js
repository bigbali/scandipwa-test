import React, { PureComponent } from 'react';
import CheckMark from '../CheckMark';
import './CheckoutProgress.style.scss';

export default class CheckoutProgress extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1
        }

        this.renderCheckoutSteps = this.renderCheckoutSteps.bind(this);
    }

    renderCheckoutSteps() {
        const renderCheckpoint = (step, index, currentIndex) => {
            return (
                <a  // If we are right here or we have passed, add class
                    className={`checkpoint 
                        ${index <= currentIndex
                            ? "active"
                            : ""}`}
                    data-value={step.title.value}
                    onClick={() => { // Redirect
                        this.props.history.push(`/checkout${step.url}`)
                    }}
                >
                    <span>
                        {index < currentIndex
                            ? <CheckMark />
                            : index + 1}
                    </span>
                </a>
            )
        }
        const steps = Object.values(this.props.steps);

        // Used to determine which is the index of current step
        return steps.map((step, index) => {
            console.dir(step)

            if (this.props.currentStep === step) {
                this.setState({
                    currentIndex: index
                })
            } // Check current index

            return (
                <React.Fragment key={index}>
                    <div
                        className={`step 
                        ${this.props.currentStep === step
                                ? "current"
                                : ""
                            }
                        ${index < this.state.currentIndex
                                ? "previous"
                                : ""
                            }`}>
                    </div>
                    {index < steps.length - 1
                        && renderCheckpoint(step, index, this.state.currentIndex)}
                    {/* Check if last step, and if so, don't render checkpoint */}
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <div className="CheckoutProgress">
                {this.renderCheckoutSteps()}
            </div>
        )
    }
}
