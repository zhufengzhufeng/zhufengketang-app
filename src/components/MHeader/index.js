import React,{Component} from 'react';
import './index.less';
import {withRouter} from 'react-router-dom'
class MHeader extends Component{
    back=()=>{
        this.props.history.goBack(); //this.props.history
    };
    render(){
        return (
            <div className="m-header">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}
//在当前组件上 增加history属性
export default withRouter(MHeader);