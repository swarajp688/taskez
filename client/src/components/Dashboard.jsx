import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardWrapper from "../styles/DashboardWrapper";
import projects from "../svg/projects.svg";
import stats from "../svg/stats.svg";
import chats from "../svg/chats.svg";
import overview from "../svg/overview.svg";
import calender from "../svg/calender.svg";
import logout from "../svg/logout.svg";
import user from "../svg/user.svg";
const Dashboard = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [todoHeading, setTodoHeading] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const rememberMe = localStorage.getItem("token");
  console.log(rememberMe);
  console.log();
  useEffect(() => {
    if (!rememberMe) {
      console.log("rememberMe");
      navigate("/");
    }
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1000/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rememberMe}`,
      },
      body: JSON.stringify({
        title:todoHeading,
        description:todoDescription,
        status:"Todo",
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "Ok") {
      setTodoHeading("");
      setTodoDescription("");
      setShowForm(false);
    }
  }

  return (
    <DashboardWrapper>
      <aside className="left">
        <h1>Dashboard</h1>
        <ul className="dashboard-list">
          <li>
            <img src={overview} alt="" /> <span>Overview</span>
          </li>
          <li>
            <img src={stats} alt="" /> <span>Stats</span>
          </li>
          <li>
            <img src={projects} alt="" /> <span>Projects</span>
          </li>
          <li>
            <img src={chats} alt="" /> <span>Chats</span>
          </li>
          <li>
            <img src={calender} alt="" /> <span>Calender</span>
          </li>
        </ul>
        <div className="logout">
          <Link to="/logout" className="link">
            <img className="img-logout" src={logout} alt="" />
            Logout
          </Link>
        </div>
      </aside>
      <main className="main-container">
        <h1>Projects</h1>
        <section className="projects-container">
          <section className="todos">
            <div className="todo-heading">
              <h2>Todos</h2>
              <span>2</span>
            </div>
            <div className="add-todo-btn">
              <button onClick={()=>setShowForm(!showForm)}>+</button>
            </div>
            {showForm && <form onSubmit={addTodo} className="todo-description">
              <input type="text" placeholder="Give your task a title" className="form-inputs" onChange={(e) => setTodoHeading(e.target.value)}/>
              <textarea name="todo" id="" cols="30" rows="10" placeholder="Description..." className="form-inputs" onChange={(e) => setTodoDescription(e.target.value)}></textarea>
              <div className="add-todo">
                <button onClick={addTodo}>Add</button>
              </div>
            </form>}

            <div className="todo-description">
              <h5>Heading</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <img className="user-image" src={user} alt=""/>
            </div>
          </section>
          <section className="todos">
          <div className="todo-heading">
              <h2>In Progress</h2>
              <span>2</span>
            </div>
            <div className="todo-description">
            <h5>Heading</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <img className="user-image" src={user} alt=""/>
            </div>
          </section>
          <section className="todos">
          <div className="todo-heading">
              <h2>Completed</h2>
              <span>2</span>
            </div>
            <div className="todo-description">
            <h5>Heading</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <img className="user-image" src={user} alt=""/>
            </div>
          </section>
        </section>
      </main>
    </DashboardWrapper>
  );
};

export default Dashboard;
