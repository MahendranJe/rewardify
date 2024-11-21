import React from 'react';
import ContactHeader from './ContactHeader';
import Storesidepannel from './Storesidepannel';
import 'react-time-picker/dist/TimePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function StoreAgreement() {
    return (
        <div>
            <ContactHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <Storesidepannel />
                    </div>
                    <div className="col-md-8 col-12">
                        <h5>Partner Agreement</h5>
                        <p>Read the document below and agree to the terms to proceed.</p>
                        <form className="storeinfocard mb-4 p-3">
                            <p>Lorem ipsum dolor sit amet consectetur. Porta eget congue eu condimentum diam. Sed nulla viverra phasellus non enim commodo sed ullamcorper. Amet risus pretium eleifend eget eu vitae. Id cursus velit erat non porttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretium odio sit sit pulvinar. Ac elit ut tincidunt ipsum gravida rhoncus lectus. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Accumsan adipiscing scelerisque egestas dignissim quam accumsan.</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDifferent" />
                                <label className="form-check-label" htmlFor="flexCheckDifferent">
                                    I have read all the terms & conditions and agree to them.
                                </label>
                            </div>
                            <div >
                                <button type="button" className="btn btn-success w-100">CONTIUE </button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreAgreement;
