import PropTypes from "prop-types";
import { BtnLoadMore } from "./ButtonLoadMore.styled";

export const ButtonLoadMore = ({ onClickButton }) => {
  return (
    <BtnLoadMore type="button" onClick={() => onClickButton()}>
      Load more
    </BtnLoadMore>
  );
};

ButtonLoadMore.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
