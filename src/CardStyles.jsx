export const cardStyles = `
.default-section { 
    min-height: 100%; 
    display: flex; 
    flex-direction:column; 
    align-items:center; 
    border: 1px solid #ccc; 
    max-width: 400px; 
    padding: 20px; 
    margin: 0 auto; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.onetap_conn_card_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    justify-content: center;
  }
  
  .onetap_conn_personal_card {
    display: flex;
    flex-direction: column;
  }
  
  .onetap_conn_personal_card_header {
    color: #2c2c2c;
    font-family: Assistant;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }
  
  .onetap_conn_card_image_container {
    position: relative;
  }
  
  .onetap_conn_card_image {
    width: 100%;
    height: auto;
  }
  
  
  
  .onetap_conn_user_image_container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid #000;
    width: 110px;
    height: 110px;
    overflow: hidden;
  }
  
  .onetap_conn_user_image_container img,
  .header-avatar-initials-overlay {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    text-align: center;
    line-height: 110px;
    font-size: 24px;
    color: #fff;
    background-color: #E65925;
  }
  
  .onetap_conn_personal_card_info {
    padding-top: 30%;
    text-align: center;
    background-color: #ffffff;
    padding-bottom: 24px;
  }
  
  .onetap_conn_personal_card_info_name {
    color: #1c1b1f;
    text-align: center;
    font-family: Assistant;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
  
  .onetap_conn_personal_card_info_subname {
    color: #e65925;
    text-align: center;
    font-family: Assistant;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
  
  .onetap_conn_personal_card_actions {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 10px 10px;
    width: 100%;
    gap: 5px;
    background-color: #ffffff;
  }
  
  .onetap_conn_personal_card_actions1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0px 0px 10px;
    background: #000;
    color: #ffffff;
    flex: 1;
    cursor: pointer;
    padding: 5px 0px;
  }
  
  .onetap_conn_personal_card_actions1:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_actions2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #ffffff;
    flex: 1;
    cursor: pointer;
    padding: 5px 0px;
  }
  
  .onetap_conn_personal_card_actions2:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_actions3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 10px 10px 0px;
    background: #000;
    color: #ffffff;
    flex: 1;
    cursor: pointer;
    position: relative;
    padding: 5px 0px;
  }
  
  .onetap_conn_personal_card_actions3:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_actions3_dropdown {
    position: absolute;
    min-width: inherit;
    top: 105%;
    background: #000;
    color: #ffffff;
    border: 2px solid gray;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-top: none;
    width: fit-content;
    left: 0;
    right: 0;
  }
  
  .onetap_conn_personal_card_actions3_dropdown_item1 {
    cursor: pointer;
    padding: 5px;
    transition: background-color 0.3s ease;
    border-radius: 4px;
  }
  
  .onetap_conn_personal_card_actions3_dropdown_item2 {
    cursor: pointer;
    padding: 5px;
    transition: background-color 0.3s ease;
    border-radius: 4px;
  }
  
  .onetap_conn_personal_card_actions3_dropdown_item1:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_actions3_dropdown_item2:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_buttons {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 10px 10px;
    width: 100%;
    gap: 5px;
    background-color: #ffffff;
    border-radius: 0px 0px 10px 10px;
  }
  
  .onetap_conn_personal_card_buttons1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0px 0px 10px;
    background: #000;
    color: #ffffff;
    flex: 1;
    cursor: pointer;
    padding: 10px 0px;
  }
  
  .onetap_conn_personal_card_buttons1:hover {
    background-color: #e65925;
  }
  
  .onetap_conn_personal_card_buttons2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 10px 10px 0px;
    background: #000;
    color: #ffffff;
    flex: 1;
    cursor: pointer;
    padding: 10px 0px;
  }
  
  .onetap_conn_personal_card_buttons2:hover {
    background-color: #e65925;
  }
  
  /* media query */
  @media only screen and (max-width: 1279px) and (min-width: 768px) {
    .onetap_conn_card_container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 60px;
      justify-content: center;
    }
  
    .onetap_conn_user_image_container {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px solid #000;
      width: 100px;
      height: 100px;
      overflow: hidden;
    }
  
    .onetap_conn_personal_card_info {
      padding-top: 20%;
      text-align: center;
      background-color: #ffffff;
      padding-bottom: 24px;
    }
  
  }
`;