import { useEffect, useRef } from 'react';
// @fixme uncomment after implementing router
// import { router } from '../router.js';
import { close } from '../../assets/icons/icons.js';
import FocusTrap from 'focus-trap-react';

const KEYCODE_ESC = 27;

function Dialog({ title, template, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown, true);
    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  useEffect(() => {
    // @fixme uncomment after implementing router
    // let prevRoute = location.href;
    // router.addEventListener('path-changed', () => {
    //   if (prevRoute !== location.href && dialogRef) {
    //     dialogRef.setAttribute('tabindex', '-1');
    //     dialogRef.focus();
    //     dialogRef.removeAttribute('tabindex');
    //     prevRoute = location.href;
    //   }
    // });
    // dialogRef.setAttribute('tabindex', '-1');
    // dialogRef.focus();
    // dialogRef.removeAttribute('tabindex');
  }, []);

  return (
    <div class="ld-dialog" onClick={onClick}>
      <div
        role="dialog"
        aria-labelledby="dialogtitle"
        ref={dialogRef}
        class="ld-dialog--container"
      >
        <FocusTrap>
          <>
            <div class="ld-dialog--header">
              <h1 id="dialogtitle">{title}</h1>
              <div class="ld-dialog--close-cont">
                <button
                  onClick={closeDialog}
                  class="ld-dialog--close"
                  aria-labelledby="button-name"
                >
                  <span id="button-name" hidden>
                    close
                  </span>
                  {close}
                </button>
              </div>
            </div>
            <div class="ld-dialog--content">{template}</div>
          </>
        </FocusTrap>
      </div>
    </div>
  );

  function onClick(e) {
    const clickedOutside = !e.composedPath().includes(dialogRef);
    if (clickedOutside) {
      closeDialog();
    }
  }

  function closeDialog() {
    onClose();
  }

  function onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      closeDialog();
    }
  }
}

export default Dialog;
