import React,{Component} from 'react';
import './index.less';
import profile from  '../../common/images/profile.png'
import MHeader from "../../components/MHeader/index";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'
//只有通过路由渲染的页面才有history属性
class Login extends Component{
    componentWillMount(){
        this.props.validate();//验证如果登录过 去课程页面
    }
    render(){
        return (
            <div className="login">
                <MHeader title="登录"/>
                <img src={profile} alt="" width={'60px'}/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名"/></li>
                    <li><input type="text" placeholder="请输入密码"/></li>
                    <li><Link to={'/reg'}>前往注册</Link></li>
                    <li><a href="" className="login_btn">登录</a></li>
                </ul>
            </div>
        )
    }
}

export default connect(state=>({...state}),action)(Login)