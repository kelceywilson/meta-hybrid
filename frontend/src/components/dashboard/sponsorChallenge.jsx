import React from "react";
import "../../scss/components/transfer.css";
import x from "../../img/x.png";

export default class Transfer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="fs-transfer-sheet">
            <div className="transfer-content">
                <div title="jobCents" className="close-button" onClick={this.props.handleInput("formType")}>
                    {/* <i className="close-button-icon" /> */}
                    <img src={x} alt=""/>
                </div>
                <form autoComplete="off" spellCheck="true" noValidate="true" onSubmit={this.props.createChallenge}>
                    <div className="initiate-transfer">
                        <div className="display-amount-fixed">
                            <div className="bottom-margin">
                                <div className="display-amount-input">
                                    <div className="currency-symbol">Sponsor a jobCent Program Here!</div>
                                </div>
                            </div>
                        </div>
                        <div className="enter-email">
                            <div className="recipiens">
                                <div className="token-list">
                                    <input className="transfer-input-field" autoComplete="off" spellCheck="false" placeholder="Job Title" autoCorrect="false" autoCapitalize="off" type="text" onChange={this.props.update("challengeTitle")} />
                                </div>
                            </div>
                            <div className="anchor" />
                            <div className="error-box" />
                        </div>
                        <div className="enter-email">
                            <div className="recipiens">
                                <div className="token-list">
                                    <input className="transfer-input-field" autoComplete="off" spellCheck="false" placeholder="Job Description" autoCorrect="false" autoCapitalize="off" type="text" onChange={this.props.update("challengeDescription")} />
                                </div>
                            </div>
                            <div className="anchor" />
                            <div className="error-box" />
                        </div>
                        <div className="enter-email">
                            <div className="recipiens">
                                <div className="token-list">
                                    <input className="transfer-input-field" autoComplete="off" spellCheck="false" placeholder="Number of Tokens to Stamp" autoCorrect="false" autoCapitalize="off" type="text" onChange={this.props.update("tokenAmount")} />
                                </div>
                            </div>
                            <div className="anchor" />
                            <div className="error-box" />
                        </div>
                        <button className="theme-button transfer-button">
                            Create Posting
                        </button>
                    </div>
                </form>
            </div>
        </div>;
    }
}
