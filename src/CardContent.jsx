import email from "./assets/icons/email.svg";
import call from "./assets/icons/call.svg";
import text from "./assets/icons/text.svg";
import connect from "./assets/icons/connect.svg";
import facebook from "./assets/icons/facebook.svg";
import tiktok from "./assets/icons/tiktok.svg";
import instagram from "./assets/icons/instagram.svg";
import bookme from "./assets/icons/bookme.svg";

export const cardHTML = `
<div class="default-section">
<div class="onetap_conn_personal_card">
 
  <div class="onetap_conn_card_image_container">
    <img
      src="https://static.javatpoint.com/computer/images/what-is-the-url.png"
      alt="cover_photo"
      class="onetap_conn_card_image"
    />
    <div class="onetap_conn_user_image_container">
    
        <img
          src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
          alt="user_photo"
          class="onetap_conn_user_image"
        />
    
    </div>
  </div>
  <div class="onetap_conn_personal_card_info">
    <div class="onetap_conn_personal_card_info_name">
    John Doe
    </div>
    <div class="onetap_conn_personal_card_info_subname">
     Software Engineer
    </div>
  </div>
  <div class="onetap_conn_personal_card_actions">
    <div class="onetap_conn_personal_card_actions1">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M4.33398 29.8346V11.168H9.66732V29.8346H4.33398ZM13.6673 29.8346V3.16797H19.0007V29.8346H13.6673ZM23.0007 29.8346V19.168H28.334V29.8346H23.0007Z"
            fill="white"
          />
        </svg>
      </div>
      <div>Analytics</div>
    </div>
    <div class="onetap_conn_personal_card_actions2" onClick={redirectProfileHandler}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
        >
          <path
            d="M24.5259 7.88641L27.6146 10.9737M26.5121 5.16662L18.1603 13.5185C17.7287 13.9494 17.4344 14.4985 17.3144 15.0964L16.543 18.9581L20.4046 18.1852C21.0026 18.0656 21.5509 17.7725 21.9826 17.3408L30.3344 8.98891C30.5854 8.73794 30.7845 8.43999 30.9203 8.11207C31.0561 7.78416 31.126 7.4327 31.126 7.07777C31.126 6.72284 31.0561 6.37138 30.9203 6.04346C30.7845 5.71555 30.5854 5.4176 30.3344 5.16662C30.0834 4.91565 29.7855 4.71656 29.4576 4.58074C29.1297 4.44491 28.7782 4.375 28.4233 4.375C28.0683 4.375 27.7169 4.44491 27.389 4.58074C27.0611 4.71656 26.7631 4.91565 26.5121 5.16662Z"
            stroke="white"
            stroke-width="3.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.209 21.8763V26.2513C28.209 27.0249 27.9017 27.7667 27.3547 28.3137C26.8077 28.8607 26.0659 29.168 25.2923 29.168H9.25065C8.4771 29.168 7.73524 28.8607 7.18826 28.3137C6.64128 27.7667 6.33398 27.0249 6.33398 26.2513V10.2096C6.33398 9.43609 6.64128 8.69422 7.18826 8.14724C7.73524 7.60026 8.4771 7.29297 9.25065 7.29297H13.6257"
            stroke="white"
            stroke-width="3.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>Edit</div>
    </div>
    <div
      class="onetap_conn_personal_card_actions3"
    
    
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
        >
          <path
            d="M4.54297 26.25V23.3333H30.793V26.25H4.54297ZM4.54297 18.9583V16.0417H30.793V18.9583H4.54297ZM4.54297 11.6667V8.75H30.793V11.6667H4.54297Z"
            fill="white"
          />
        </svg>
      </div>
      <div>More</div>
     
    </div>
  </div>
  <div class="onetap_conn_personal_card_buttons">
    <div class="onetap_conn_personal_card_buttons1">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M16.2507 12C15.1898 12 14.1724 12.4214 13.4222 13.1716C12.6721 13.9217 12.2507 14.9391 12.2507 16C12.2507 17.0609 12.6721 18.0783 13.4222 18.8284C14.1724 19.5786 15.1898 20 16.2507 20C17.3115 20 18.3289 19.5786 19.0791 18.8284C19.8292 18.0783 20.2507 17.0609 20.2507 16C20.2507 14.9391 19.8292 13.9217 19.0791 13.1716C18.3289 12.4214 17.3115 12 16.2507 12ZM16.2507 22.6667C14.4825 22.6667 12.7868 21.9643 11.5366 20.714C10.2864 19.4638 9.58398 17.7681 9.58398 16C9.58398 14.2319 10.2864 12.5362 11.5366 11.286C12.7868 10.0357 14.4825 9.33333 16.2507 9.33333C18.0188 9.33333 19.7145 10.0357 20.9647 11.286C22.2149 12.5362 22.9173 14.2319 22.9173 16C22.9173 17.7681 22.2149 19.4638 20.9647 20.714C19.7145 21.9643 18.0188 22.6667 16.2507 22.6667ZM16.2507 6C9.58398 6 3.89065 10.1467 1.58398 16C3.89065 21.8533 9.58398 26 16.2507 26C22.9173 26 28.6107 21.8533 30.9173 16C28.6107 10.1467 22.9173 6 16.2507 6Z"
            fill="white"
          />
        </svg>
      </div>
      <div>View Card</div>
    </div>
    <div class="onetap_conn_personal_card_buttons2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
        >
          <path
            d="M27.75 33C26.5 33 25.4375 32.5625 24.5625 31.6875C23.6875 30.8125 23.25 29.75 23.25 28.5C23.25 28.325 23.2625 28.1435 23.2875 27.9555C23.3125 27.7675 23.35 27.599 23.4 27.45L12.825 21.3C12.4 21.675 11.925 21.969 11.4 22.182C10.875 22.395 10.325 22.501 9.75 22.5C8.5 22.5 7.4375 22.0625 6.5625 21.1875C5.6875 20.3125 5.25 19.25 5.25 18C5.25 16.75 5.6875 15.6875 6.5625 14.8125C7.4375 13.9375 8.5 13.5 9.75 13.5C10.325 13.5 10.875 13.6065 11.4 13.8195C11.925 14.0325 12.4 14.326 12.825 14.7L23.4 8.55C23.35 8.4 23.3125 8.2315 23.2875 8.0445C23.2625 7.8575 23.25 7.676 23.25 7.5C23.25 6.25 23.6875 5.1875 24.5625 4.3125C25.4375 3.4375 26.5 3 27.75 3C29 3 30.0625 3.4375 30.9375 4.3125C31.8125 5.1875 32.25 6.25 32.25 7.5C32.25 8.75 31.8125 9.8125 30.9375 10.6875C30.0625 11.5625 29 12 27.75 12C27.175 12 26.625 11.894 26.1 11.682C25.575 11.47 25.1 11.176 24.675 10.8L14.1 16.95C14.15 17.1 14.1875 17.269 14.2125 17.457C14.2375 17.645 14.25 17.826 14.25 18C14.25 18.175 14.2375 18.3565 14.2125 18.5445C14.1875 18.7325 14.15 18.901 14.1 19.05L24.675 25.2C25.1 24.825 25.575 24.5315 26.1 24.3195C26.625 24.1075 27.175 24.001 27.75 24C29 24 30.0625 24.4375 30.9375 25.3125C31.8125 26.1875 32.25 27.25 32.25 28.5C32.25 29.75 31.8125 30.8125 30.9375 31.6875C30.0625 32.5625 29 33 27.75 33Z"
            fill="white"
          />
        </svg>
      </div>
      <div>Share</div>
    </div>
  </div>
</div>
</div>
`;