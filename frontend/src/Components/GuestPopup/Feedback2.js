import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Svg from '../../assets/Images/svg/index';
import './guestpopup.scss';
import feedbackImg from '../../assets/Images/png/feedback.png';

const ProvideFeedback = (props) => {
  const hideModal = () => {
    props?.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        className="feedback-modal"
        centered
      >
        <Modal.Header>
          {/* <CloseIcon onClick={hideModal} className="ic-close" /> */}
          <img src={Svg?.closeicon} onClick={hideModal} className="ic-close" />
        </Modal.Header>
        <Modal.Body className="provide-feedback-body">
          <div className="feedback-img">
            <img src={feedbackImg} className="app-view-img" />
          </div>
          <h3 className="thankyou-txt">
            Thank you for exploring <span className="cipla">Cipla</span>
            <span className="med">Med</span>
          </h3>
          <p className="fb-txt">
            To provide your feedback please click
            <a
              className="blue-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.surveymonkey.com/r/PRF5R9M"
            >
              {' '}
              here
            </a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProvideFeedback;
