import React,{Component} from 'react';
import './index.less';
import profile from  '../../common/images/profile.png'
import MHeader from "../../components/MHeader/index";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'
//只有通过路由渲染的页面才有history属性
class Login extends Component{
    constructor(){
        super();
        this.state = {username:'',password:''}
    }
    componentWillMount(){
        this.props.validate();//验证如果登录过 去课程页面
    }
    login =()=>{
        this.props.login(this.state);
    };
    render(){
        return (
            <div className="login">
                <MHeader title="登录"/>
                <img src={profile} alt="" width={'60px'}/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名" value={this.state.username} onChange={(e)=>{
                        this.setState({username:e.target.value})
                    }}/></li>
                    <li><input type="text" placeholder="请输入密码" value={this.state.password} onChange={(e)=>{
                        this.setState({password:e.target.value})
                    }}/></li>
                    <li><Link to={'/reg'}>前往注册</Link></li>
                    <li><a className="login_btn" onClick={this.login}>登录</a></li>
                    <li>{this.props.user.err}</li>
                </ul>
            </div>
        )
    }
}

export default connect(state=>({...state}),action)(Login)