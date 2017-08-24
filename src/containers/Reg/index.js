import React,{Component} from 'react';
import './index.less';
import profile from  '../../common/images/profile.png'
import MHeader from "../../components/MHeader/index";
export default class Reg extends Component{
    render(){
        return (
            <div className="login">
                <MHeader title="注册"/>
                <img src={profile} alt="" width={'60px'}/>
                <ul>
                    <li><input type="text" placeholder="输入用户名"/></li>
                    <li><input type="text" placeholder="输入密码"/></li>
                    <li><a href="" className="login_btn">注册</a></li>
                </ul>
            </div>
        )
    }
}