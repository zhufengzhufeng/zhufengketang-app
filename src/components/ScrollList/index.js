import React,{Component} from 'react';
//可以接收几次个参数,
//element:表示滚动元素
//isLoading 是否正在加载
//hasMore 是否有更多
//loadMore获取更多的方法
export default class ScrollList extends Component{
    constructor(){
        super();
        this.state = {flag:false}
    }
    //等待接收的属性有element 在绑定事件
    componentWillReceiveProps(nextProps){ //父组件数据更新 会触发子组件的WillReceiveProps,此钩子函数 父组件没有发生状态的变化子组件不更新
        console.log('scroll');
        if(nextProps.element && !this.state.flag){
            //节流
            nextProps.element.addEventListener('scroll',()=>{
                //....... 判断 scrollTop,offsetHeight,scrollHeight
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    let {scrollTop,offsetHeight,scrollHeight} = nextProps.element;
                    //距离底部还有20像素就开始加载
                    if(scrollTop+offsetHeight+20 >scrollHeight&&this.props.hasMore&&!this.props.isLoading){
                        this.props.loadMore();
                    }
                },50);
            });
            this.setState({flag:true});
        }
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}