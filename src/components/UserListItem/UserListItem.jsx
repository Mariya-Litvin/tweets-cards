import logo from "../../images/logo.png";
import logoGoIt from "../../images/goit.png";
import { useState } from "react";
import { updateUsersData } from "../../api/Api";
import {
  ButtonFollow,
  LogoGoIt,
  LogoImg,
  UserAvatar,
  UserFollowers,
  UserLine,
  UserTweets,
  WrapperUserAvatar,
} from "./UserListItem.styled";
import PropTypes from "prop-types";

const UserListItem = (user) => {
  const { id, avatar, tweets, followers, check } = user.user;

  const [selection, setSelection] = useState(check);
  const [followersCount, setFollowersCount] = useState(followers);

  const handleFollowClick = () => {
    setSelection(!selection);

    if (selection) {
      updateUsersData(id, {
        check: !selection,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!selection) {
      updateUsersData(id, {
        check: !selection,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <>
      <LogoGoIt src={logoGoIt} alt="logoGoIt" />
      <LogoImg src={logo} alt="logo" />
      <UserLine></UserLine>
      <WrapperUserAvatar>
        <UserAvatar src={avatar} alt={user} />
      </WrapperUserAvatar>
      <UserTweets>{tweets} tweets</UserTweets>
      <UserFollowers>
        {followersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        Followers
      </UserFollowers>
      <ButtonFollow
        type="button"
        style={{ backgroundColor: selection ? "#5CD3A8" : "#EBD8FF" }}
        onClick={() => handleFollowClick(id)}
      >
        {selection ? "following" : "follow"}
      </ButtonFollow>
    </>
  );
};

export default UserListItem;

UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
  }).isRequired,
};
