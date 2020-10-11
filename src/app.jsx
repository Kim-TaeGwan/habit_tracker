import React from "react";
import { Component } from "react";
import "./app.css";
// import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
      { id: 4, name: "Cook", count: 0 },
      { id: 5, name: "Game", count: 0 },
    ],
  };
  // handleIncrement = habit => {
  //   const habits = [...this.state.habits]; // habits에 있는 object들을 복사
  //   const index = habits.indexOf(habit); // habits 배열안에 있는 index(habit)를 찾는다, 배열안에 몇번째에 있는지
  //   habits[index].count++; // 배열의 index의 count를 증가
  //   // 복사한 이유는 state의 데이터를 부분적으로 업데이트를 하면 react는 그것을 모른다.
  //   // 그래서 전체적으로 업데이트를 해주어야 한다
  //   this.setState({ habits: habits }); // 복사해온 배열을 업데이트
  // };
  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // 기존 habit의 key,value들이 하나씩 만들어 진다, 새로운 object가 만들어짐
      } else {
        return item;
      }
    });
    this.setState({ habits: habits }); // 복사해온 배열을 업데이트
  };
  // handleDecrement = habit => {
  //   const habits = [...this.state.habits]; // habits에 있는 object들을 복사
  //   const index = habits.indexOf(habit); // habits 배열안에 있는 index(habit)를 찾는다, 배열안에 몇번째에 있는지
  //   const count = habits[index].count - 1; //배열의 index의 count를 감소
  //   habits[index].count = count < 0 ? 0 : count;
  //   // 복사한 이유는 state의 데이터를 부분적으로 업데이트를 하면 react는 그것을 모른다.
  //   // 그래서 전체적으로 업데이트를 해주어야 한다
  //   this.setState({ habits: habits }); // 복사해온 배열을 업데이트
  // };
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }; // 기존 habit의 key,value들이 하나씩 만들어 진다, 새로운 object가 만들어짐
      } else {
        return item;
      }
    });
    this.setState({ habits: habits }); // 복사해온 배열을 업데이트
  };
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id); // 새로운 배열을 만들어 동일한 hibit의 id가 아닌 데이터만 뽑을 것.
    this.setState({ habits: habits }); // 복사해온 배열을 업데이트
  };
  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habits });
  };
  // handleReset = () => {
  //   const habits = this.state.habits.map(habit => {
  //     habit.count = 0; // habit의 count를 0 으로 만들고
  //     return habit; // habit을 리턴시킴
  //   });
  //   this.setState({ habits });
  // };
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        {/* <HabitAddForm /> */}
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
