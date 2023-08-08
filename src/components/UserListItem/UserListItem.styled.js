import styled from "styled-components";

export const LogoGoIt = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const LogoImg = styled.img`
  margin: 28px auto 18px auto;
`;

export const UserLine = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const WrapperUserAvatar = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const UserAvatar = styled.img`
  position: absolute;
  left: 9.48px;
  top: 9.42px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const UserTweets = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
  margin: 62px auto 0px auto;
`;

export const UserFollowers = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  margin: 16px auto 0px auto;
`;

export const ButtonFollow = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 26px auto 36px auto;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 10px 10px 5px -1px rgba(87, 190, 230, 0.2);
    scale: 1.02;
  }
`;
