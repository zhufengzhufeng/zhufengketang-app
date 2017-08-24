import React,{Component} from 'react';
import './index.less';
import profile from '../../common/images/profile.png';
import {Link} from 'react-router-dom'
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <div className="profile_bg">
                    <img src={profile} width={"60px"}/>
                    <Link to={'/login'} className="login_btn">登录</Link>
                </div>
            </div>
        )
    }
}