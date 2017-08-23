import React,{Component} from 'react';
//可以接收几次个参数,
//element:表示滚动元素
//isLoading 是否正在加载
//hasMore 是否有更多
//loadMore获取更多的方法
export default class ScrollList extends Component{
    //等待接收的属性有element 在绑定事件
    componentWillReceiveProps(nextProps){ //父组件数据更新 会触发子组件的WillReceiveProps
        if(nextProps.element){
            nextProps.element.addEventListener('scroll',()=>{
                //....... 判断 scrollTop,offsetHeight,scrollHeight
                let {scrollTop,offsetHeight,scrollHeight} = nextProps.element;
                console.log(scrollTop,offsetHeight,scrollHeight);
            })
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