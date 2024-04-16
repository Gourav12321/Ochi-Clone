import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const MobilePopup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, []);

  useEffect(() => {
    if (isMobile) {
      Swal.fire({
        title: 'Attention!',
        text: 'You should open this website on a PC or laptop for a better experience.',
        icon: 'warning',
        confirmButtonText: 'Close'
      });
    }
  }, [isMobile]);

  return null;
};

export default MobilePopup;
