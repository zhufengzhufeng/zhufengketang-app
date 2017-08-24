import React,{Component} from 'react';
import './index.less';
import profile from '../../common/images/profile.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'
class Profile extends Component{
    componentDidMount(){
        this.props.auth();
    }
    render(){
        return (
            <div className="profile">
                <div className="profile_bg">
                    <img src={profile} width={"60px"}/>
                    {this.props.user.userInfo.username?<a className="login_btn">{this.props.user.userInfo.username}</a>
                        : <Link to={'/login'} className="login_btn">登录</Link>}
                </div>
            </div>
        )
    }
}
export default connect(state=>({...state}),action)(Profile);