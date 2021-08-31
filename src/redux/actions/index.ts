import * as UserActionCreators from "./user";
import * as AnimeActionCreators from "./chosenAnime";

const exportedActions = {
  ...UserActionCreators,
  ...AnimeActionCreators,
};

export default exportedActions;
