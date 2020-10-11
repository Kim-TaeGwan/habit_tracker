import React, { memo } from "react";

const HabitAddForm = memo(props => {
  // class컴포넌트에서는 PureComponent를 사용하지만 state가 없다면 function컴포넌트에서 memo 사용
  const formRef = React.createRef();
  const inputRef = React.createRef(); // ref 생성, ref로 멤버 변수로 정의

  const onSubmit = event => {
    // submit은 실행이 되면 자동적으로 브라우저가 새로고침된다.
    // 다른페이지로 넘어가는걸 예상하고 있기 때문이다.
    event.preventDefault(); // 브라우저의 기본 기능을 취소
    // console.log(event);
    // console.log(this.inputRef.current.value); // 현재들어있는 요소의(current) value를 읽어온다
    const name = inputRef.current.value;
    name && props.onAdd(name); // name이 있다면 onAdd에 name을 전달
    // this.inputRef.current.value = ""; // 미리입력한거 초기화, 또는 아래처럼 form을 초기화 가능
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef} // ref로 만든 멤버변수를 연결
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// import React, { PureComponent } from "react";

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef(); // ref 생성, ref로 멤버 변수로 정의

//   onSubmit = event => {
//     // submit은 실행이 되면 자동적으로 브라우저가 새로고침된다.
//     // 다른페이지로 넘어가는걸 예상하고 있기 때문이다.
//     event.preventDefault(); // 브라우저의 기본 기능을 취소
//     // console.log(event);
//     // console.log(this.inputRef.current.value); // 현재들어있는 요소의(current) value를 읽어온다
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name); // name이 있다면 onAdd에 name을 전달
//     // this.inputRef.current.value = ""; // 미리입력한거 초기화, 또는 아래처럼 form을 초기화 가능
//     this.formRef.current.reset();
//   };

//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//           ref={this.inputRef} // ref로 만든 멤버변수를 연결
//         />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
