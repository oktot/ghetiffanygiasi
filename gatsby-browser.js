import ReactGA from 'react-ga';
ReactGA.initialize('UA-104073097-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
