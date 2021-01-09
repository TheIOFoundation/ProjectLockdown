import { useEffect } from 'react';
// @fixme uncomment after implementing router
// import { router } from '../router.js';
import { close } from '../assets/icons/icons.js';
import { FocusTrap } from '../../../node_modules/focus-trap-react';

const KEYCODE_ESC = 27;

export default function Dialog({ title, template, onClose }) {
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
    //   if (prevRoute !== location.href && this.dialogRef) {
    //     this.dialogRef.setAttribute('tabindex', '-1');
    //     this.dialogRef.focus();
    //     this.dialogRef.removeAttribute('tabindex');
    //     prevRoute = location.href;
    //   }
    // });
    this.dialogRef.setAttribute('tabindex', '-1');
    this.dialogRef.focus();
    this.dialogRef.removeAttribute('tabindex');
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
          <div class="ld-dialog--header">
            <h1 id="dialogtitle">{this.props.title}</h1>
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
          <div class="ld-dialog--content">{this.props.template}</div>
        </FocusTrap>
      </div>
    </div>
  );

  function onClick(e) {
    const clickedOutside = !e.composedPath().includes(this.dialogRef);
    if (clickedOutside) {
      closeDialog();
    }
  }

  function closeDialog() {
    this.props.onClose();
  }

  function onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      closeDialog();
    }
  }
}
