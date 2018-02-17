import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { getIsAuthorized } from "../reducers";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import PrivateRoute from "./PrivateRoute";
//import './AppRouter.css';

// class AppRouter extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={Search} />
//           <Route path="/shows/:id" component={ShowPage} />
//           <Redirect to="/" />
//         </Switch> 
//       </div>
//     );
//   }
// }

class AppRouter extends Component {
    render() {
        const { isAuthorized } = this.props;
        return (
            <div className="App">
                <p className="test">asd</p>
                <Link to="/auth">Войти</Link>
                <Switch>
                    <PrivateRoute path="/user/dex157" />
                    <PrivateRoute path="/user/:name" />
                    <Route path="/login" />
                </Switch>
            </div>
        );
    } 
}
 
// class AppRouter extends Component {
//     render() {
//         const { isAuthorized } = this.props;
//         return (
//             <div className="App">
//                 <p>asd</p>
//                 <Link to="/auth">Войти</Link>
//                 <Switch>
//                     <PrivateRoute path="/user/dex157" />
//                     <PrivateRoute path="/user/:name" />
//                     <Route path="/login" />
//                 </Switch>
//             </div>
//         );
//     }
// }

// export default connect(state => ({
//     isAuthorized: getIsAuthorized(state)
// }))(AppRouter); 

export default AppRouter;