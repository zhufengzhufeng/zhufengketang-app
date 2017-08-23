import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
class Home extends Component{
    chooseLesson =(type)=>{
        this.props.setCurrentLesson(type);
    };
    componentDidMount(){
        this.props.getSlider();
    }
    render(){
        return (
            <div>
                {/*让HomeHeader选择的值在home中获取到*/}
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content">
                    <Swiper data={this.props.home.sliders}/>
                </div>
            </div>
        )
    }
}
//mapStateToProps 将redux中的数据变成属性
//mapDispatchToProps 可以直接传一个actionCreator的对象
//this.props.setCurrentLesson this.props.home.sliders
export default connect(state=>({...state}),action)(Home);