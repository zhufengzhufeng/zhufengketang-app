import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
class Home extends Component{
    chooseLesson =(type)=>{
        this.props.setCurrentLesson(type);
    };
    render(){
        return (
            <div>
                {/*让HomeHeader选择的值在home中获取到*/}
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content">

                </div>
            </div>
        )
    }
}
//mapStateToProps 将redux中的数据变成属性
//mapDispatchToProps 可以直接传一个actionCreator的对象
//this.props.setCurrentLesson
export default connect(state=>({...state}),action)(Home);