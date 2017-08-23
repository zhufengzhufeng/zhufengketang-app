import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class Swiper extends Component {
    render() {
        return (
            <div>
                {this.props.data.length?<ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
                    {this.props.data.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))}
                </ReactSwipe>:<div>正在加载</div>}
            </div>
        );
    }
}