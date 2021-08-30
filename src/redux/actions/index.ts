import * as UserActionCreators from "./user";
import * as AnimeActionCreators from "./anime";

const exportedActions = {
  ...UserActionCreators,
  ...AnimeActionCreators,
};

export default exportedActions;
