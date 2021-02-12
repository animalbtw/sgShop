import * as React from 'react';
import st from '../assets/styles/Auth.module.css'

const Auth = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {
        !isOpen ? (
          <div className={st.auth}>
            <div className={st.auth_signin}>
              <div className={st.auth_signin_header}>
                sign in
              </div>
              <div className={st.auth_signin_form}>
                <div className={st.auth_signin_form_inputs}>
                  <input
                    className={st.auth_signin_form_inputs_single}
                    type="email"
                    placeholder='E-MAIL'
                  />
                  <input
                    className={st.auth_signin_form_inputs_single}
                    type="password"
                    placeholder='PASSWORD'
                  />
                </div>
                <div className={st.auth_signin_form_actions}>
                  <button
                    className={st.auth_signin_form_actions_button}>
                    Submit
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={st.auth_signin_form_actions_button}>
                    Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={st.auth}>
            <div className={st.auth_signin}>
              <div className={st.auth_signin_header}>
                registration
              </div>
              <div className={st.auth_signin_form}>
                <div className={st.auth_signin_form_inputs}>
                  <input
                    className={st.auth_signin_form_inputs_single}
                    type="email"
                    placeholder='E-MAIL'
                  />
                  <input
                    className={st.auth_signin_form_inputs_single}
                    type="password"
                    placeholder='PASSWORD'
                  />
                  <input
                    className={st.auth_signin_form_inputs_single}
                    type="password"
                    placeholder='REPEAT PASSWORD'
                  />
                </div>
                <div className={st.auth_signin_form_actions}>
                  <button
                    className={st.auth_signin_form_actions_button}>
                    Submit
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={st.auth_signin_form_actions_button}>
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Auth;

//
// <div className={st.auth_signin}>
//   <div className={st.auth_signin_header}>
//     registration
//   </div>
//   <div className={st.auth_signin_form}>
//     <div className={st.auth_signin_form_inputs}>
//       <input
//         className={st.auth_signin_form_inputs_single}
//         type="email"
//         placeholder='E-MAIL'
//       />
//       <input
//         className={st.auth_signin_form_inputs_single}
//         type="password"
//         placeholder='PASSWORD'
//       />
//       <input
//         className={st.auth_signin_form_inputs_single}
//         type="password"
//         placeholder='REP.PASSWORD'
//       />
//     </div>
//     <div className={st.auth_signin_form_actions}>
//       <button
//         className={st.auth_signin_form_actions_button}>
//         Submit
//       </button>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={st.auth_signin_form_actions_regButton}>
//         sing in
//       </button>
//     </div>
//   </div>
// </div>