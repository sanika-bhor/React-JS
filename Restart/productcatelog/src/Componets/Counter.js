import React from "react";

class Counter extends  React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:this.props.likes};  
     
    }

   
    render(){

    return (
      <div>
        <div>
          <img
            src="./images/likes.jpg"
            width={50}
            height={50}
            onClick={() => {
            const newCount = this.state.count + 1; ;
              this.setState({ count: newCount});
              console.log(newCount);
              this.props.handler(newCount);
            }}
          />
          <img
            src="./images/dislike.jpg"
            width={50}
            height={50}
            onClick={() => {
                if(this.state.count!=0)
                {
                  const newCount = this.state.count - 1;
                  this.setState({ count: newCount });
                  console.log(newCount);
                  this.props.handler(newCount);
                }

            }}
          />
        </div>
      </div>
    );
}
}

export default Counter;