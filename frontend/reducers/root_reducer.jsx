import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import WhereToReducer from './whereto_reducer';
import FilterReducer from './filter_reducer';
import ReviewsReducer from './reviews_reducer';
import SplashReducer from './splash_reducer';
import SpotsReducer from './spots_reducer';
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  filter: FilterReducer,
  spots: SpotsReducer,
  mapOpts: MapReducer,
  whereTo: WhereToReducer,
  splash: SplashReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
