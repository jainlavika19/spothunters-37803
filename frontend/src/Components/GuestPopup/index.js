import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Svg from '../../assets/Images/svg/index';
import './guestpopup.scss';
import ProvideFeedback from './Feedback2';
import feedbcakView from '../../assets/Images/png/feedbback-app-view.png';

const Feedback = (props) => {
  const hideModal = () => {
    localStorage.setItem('feedback-modal', true);
    setOpenFeedback(false);
  };
  const [openFeedback, setOpenFeedback] = useState(false);

  const provideFeedback = () => {
    setOpenFeedback(true);
  };

  return (
    <div className='guest-popup'>
      <div className="feedback-btn">
        <Button onClick={provideFeedback}>
          <span className="fd-txt">Feedback</span>
        </Button>
      </div>
      <ProvideFeedback show={openFeedback} onHide={hideModal} />
    </div>
  );
};

export default Feedback;
