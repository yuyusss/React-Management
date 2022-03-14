import React from 'react';

//Customer 클래스는 react의 component 라이브러리를 상속받는다
//props3. this 키워드를 이용해서 전달받은 props의 name,birthday 등을 출력
class Customer extends React.Component{
    render(){
        return(
        <div>
           <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>  
        );

       
    }
}


class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    } 
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
            
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
            </div>
        )
    } 
}
export default Customer;