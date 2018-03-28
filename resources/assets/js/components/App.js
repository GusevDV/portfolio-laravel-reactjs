import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom'
import DocumentMeta from 'react-document-meta';

import Header from './Header';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Load from './Load';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
    }
    this.handleLoadingChange = this.handleLoadingChange.bind(this);
  }
  handleLoadingChange() {
    this.setState({loading: !this.state.loading});
  }

  render(){

    const meta = {
      title: 'Portfolio',
    }

    return(
      <div>
        <DocumentMeta {...meta}>
        <Header />
        <Load loading={this.state.loading}/>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Posts onLoadingChange={this.handleLoadingChange} {...props} />
          )} />
          <Route path='/post/:id' render={(props) => (
            <SinglePost onLoadingChange={this.handleLoadingChange} {...props} />
          )} />
        </Switch>
        <Footer />
        </DocumentMeta>
      </div>
    );
  }

}

export default App;
