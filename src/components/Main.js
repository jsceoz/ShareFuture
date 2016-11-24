require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, hashHistory } from 'react-router'
import HomePage from './home/HomePageComponent'
import NewsPage from './news/NewsPageComponent'
import NewsDetail from './news/NewsDetailComponent'
import AccountPage from './account/AccountPageComponent'
import SchoolPage from './school/SchoolListPageComponent'
import SchoolSecList from './school/SchoolSecListComponent'
import SchoolDetail from './school/SchoolDetailComponent'
import BBSPage from './bbs/BbslistPageComponent'
import PostPage from './bbs/PostPageComponent'
import Login from './login/LoginBoxComponent'
import PricePage from './price/PricePageComponent'
import PriceDetail from './price/PriceDetailComponent'
import AnalysisPage from './account/AnalysisPageComponent'
import CancelPage from  './account/CancelPageComponent'
import RecordPage from './account/RecordPageComponent'
import ResetPage from './account/ResetPageComponent'
import Deal from './price/DealComponent'
import Setting from  './account/SettingComponent'


class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="index">
          <Router history={hashHistory}>
            <Route path="/home" component={HomePage}/>
            <Route path="/" component={Login}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/news/detail/:id" component={NewsDetail}/>
            <Route path="/account" component={AccountPage}/>
            <Route path="/school" component={SchoolPage}/>
            <Route path="/school/list/:category" component={SchoolSecList} />
            <Route path="/school/detail/:id" component={SchoolDetail}/>
            <Route path="/bbs" component={BBSPage}/>
            <Route path="/bbs/detail/:id" component={PostPage}/>
            <Route path="/price" component={PricePage}/>
            <Route path="/price-detail/:name" component={PriceDetail}/>
            <Route path="/cancel" component={CancelPage}/>
            <Route path="/analysis" component={AnalysisPage}/>
            <Route path="/record" component={RecordPage}/>
            <Route path="/reset" component={ResetPage}/>
            <Route path="/deal/:name" component={Deal}/>
            <Route path="/setting" component={Setting}/>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
