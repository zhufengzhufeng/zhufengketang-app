import React,{Component} from 'react';
import './index.less';
import profile from  '../../common/images/profile.png'
import MHeader from "../../components/MHeader/index";
//只有通过路由渲染的页面才有history属性
export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <MHeader title="登录"/>
                <img src={profile} alt="" width={'60px'}/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名"/></li>
                    <li><input type="text" placeholder="请输入密码"/></li>
                    <li><a href="">前往注册</a></li>
                    <li><a href="" className="login_btn">登录</a></li>
                </ul>
            </div>
        )
    }
}