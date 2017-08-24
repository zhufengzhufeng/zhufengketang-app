import React,{Component} from 'react';
import './index.less';
import profile from  '../../common/images/profile.png'
import MHeader from "../../components/MHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
class Reg extends Component{
    reg=()=>{
        this.props.reg({username:this.username.value,password:this.password.value});
        console.log(this.username.value,this.password.value);
    };
    render(){
        return (
            <div className="login">
                <MHeader title="注册"/>
                <img src={profile} alt="" width={'60px'}/>
                <ul>
                    <li><input type="text" placeholder="输入用户名" ref={(element)=>{
                        this.username = element;
                    }}/></li>
                    <li><input type="text" placeholder="输入密码" ref={(element)=>{
                        this.password = element;
                    }}/></li>
                    <li><a className="login_btn" onClick={this.reg}>注册</a></li>
                    <li>{this.props.user.err}</li>
                </ul>
            </div>
        )
    }
}
export default connect(state=>({...state}),action)(Reg)