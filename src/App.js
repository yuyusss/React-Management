//index.html 에서 id값이 root인 div에 app component가 그려진다.
import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

//props1. props값 지정
const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/any1',
  'name':  '홍길동',
  'birthday': '961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any2',
  'name':  '홍길',
  'birthday': '961322',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':  '홍',
  'birthday': '961422',
  'gender':'남자',
  'job':'대학생'
},

]


class App extends Component{
  render(){

    return(
      <div>
      {
        customers.map(c =>{   //반복되는 소스코드를 줄이고 ,배열의 각 원소에 어떤것을 적용하고싶다 =>map사용
          return(
            <Customer
              key={c.id}    //map사용시 key값이 있어야 한다.
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
      </div>
      
    );
  }
}
// class App extends Component{
//   render(){

//     return(
//       <div>
//       <Customer
//         id={customers[0].id}
//         image={customers[0].image}
//         name={customers[0].name}  //props2. props(속성) 사용
//         birthday={customers[0].birthday}
//         gender={customers[0].gender}
//         job={customers[0].job}
//       />
//       <Customer
//         id={customers[1].id}
//         image={customers[1].image}
//         name={customers[1].name}  //props2. props(속성) 사용
//         birthday={customers[1].birthday}
//         gender={customers[1].gender}
//         job={customers[1].job}
//       />
//       <Customer
//         id={customers[2].id}
//         image={customers[2].image}
//         name={customers[2].name}  //props2. props(속성) 사용
//         birthday={customers[2].birthday}
//         gender={customers[2].gender}
//         job={customers[2].job}
//       />
//       </div>
      
//     );
//   }
// }
export default App;

