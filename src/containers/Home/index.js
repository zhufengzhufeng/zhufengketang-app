import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import './index.less'
import ScrollList from "../../components/ScrollList/index";
import util from '../../common/util'
class Home extends Component{
    chooseLesson =(type)=>{
        this.props.setCurrentLesson(type);
    };
    componentDidMount(){
        // 判断redux中是否存放了数据 如果有则不去获取数据
        if(this.props.home.lesson.lessonList.length===0){
            this.props.getSlider();
            this.props.getLesson();
        }
        //让组件强制更新
        if(this.props.home.lesson.lessonList.length>0){
            //将记录好的滚动条状态取出来赋给 content元素
            this.refs.scroll.scrollTop = util.get('homeLocation');
            this.forceUpdate();
        }
    }
    componentWillUnmount(){ //组件将要销毁的时候 记住滚动条的位置
        util.set('homeLocation',this.refs.scroll.scrollTop);
    }
    loadMore=()=>{
        this.props.getLesson();
    };
    render(){
        let {hasMore,isLoading,lessonList} = this.props.home.lesson;
        return (
            <div>
                {/*让HomeHeader选择的值在home中获取到*/}
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content" ref="scroll">
                    <ScrollList element={this.refs.scroll}
                                isLoading={isLoading}
                                hasMore={hasMore}
                                loadMore={this.loadMore}
                    >
                    <Swiper data={this.props.home.sliders}/>
                    <div className="lesson-list">
                        <h3><i className="iconfont icon-kecheng-copy"></i> 全部课程</h3>
                        {/*课程列表*/}
                        {lessonList.length?lessonList.map((item,index)=>(
                            <div key={index} className="lesson-list-item">
                                <img src={item.url} />
                                <p>{item.lesson}</p>
                                <span>{item.price}</span>
                            </div>
                        )):<div>正在加载</div>}
                    </div>
                    <button onClick={this.loadMore}>获取更多</button>
                    </ScrollList>
                </div>
            </div>
        )
    }
}
//mapStateToProps 将redux中的数据变成属性
//mapDispatchToProps 可以直接传一个actionCreator的对象
//this.props.setCurrentLesson this.props.home.sliders
export default connect(state=>({...state}),action)(Home);