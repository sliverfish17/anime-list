import * as UserActionCreators from "./user";
import * as AnimeActionCreators from "./chosenAnime";
import * as ListActionCreators from "./list";
import * as DisplayedAnimeActionCreators from "./pageAnime";

const exportedActions = {
  ...UserActionCreators,
  ...AnimeActionCreators,
  ...ListActionCreators,
  ...DisplayedAnimeActionCreators,
};

export default exportedActions;
