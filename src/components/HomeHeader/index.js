import React,{Component} from 'react';
import './index.less';
import logo from '../../common/images/logo.png';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {isShow:false}
    }
    changeShow =()=>{
        this.setState({isShow:!this.state.isShow})
    };
    render(){
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img src={logo}/>
                    <div onClick={this.changeShow}>
                        {this.state.isShow?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>}
                    </div>
                </div>
                <TransitionGroup>
                {this.state.isShow?<CSSTransition timeout={1000} classNames="fadeIn">
                    <ul className="menu-list">
                        <li type="1">Node课程培训</li>
                        <li type="2">HTML培训课程</li>
                        <li type="3">视频课程</li>
                        <li type="4">文档课件</li>
                    </ul>
                </CSSTransition>:null}
                </TransitionGroup>
            </div>
        )
    }
}