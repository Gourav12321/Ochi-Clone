import React, { useState, useEffect } from 'react';

const MobilePopup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, []);

  const handleClosePopup = () => {
    setIsMobile(false);
  };

  return (
    <>
      {isMobile && (
        <div className="mobile-popup">
          <div className="popup-content">
            <p>You should open this website on a PC or laptop for a better experience.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobilePopup;
