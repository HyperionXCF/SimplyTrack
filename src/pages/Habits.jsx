import React from "react";
import {useState} from "react";
import "./Habits.css";

function Habits() {
  const today=new Date();
  const todayDate=today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
  const [habits, setHabits]=useState([]);
  const [showForm, setShowForm]=useState(false);
  const [showDetail, setShowDetail]=useState(null);
  const [newHabit, setNewHabit]=useState({title: " ",startDate:" "});

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newHabit.title || !newHabit.startDate)
      return;

    setHabits([
      ...habits,
      {
        id:Date.now(),
        title:newHabit.title,
        startDate:newHabit.startDate,
        streak:0,
      },
    ]);
    setNewHabit({title:"",startDate:""});
    setShowForm(false);
  };

  const markDone=(id)=>{
    setHabits(
      habits.map((h)=>
        h.id==id?{...h, streak: h.streak+1}:h
    )
    );
  };

  const deleteHabit=(id)=>{
    setHabits(habits.filter((h)=>h.id!=id));
  };

  return(
    <div className="page">
      <div className="header">
        <div className="title">
          <h1>Daily Habit Tracker</h1>
          <p><b>{todayDate}</b></p>
        </div>
        <div className="addBtn">
          <button onClick={()=>setShowForm(true)}>➕ Add Habit</button>
        </div>
      </div>
      <div className="content">
      <div className="details">
        {habits.map((h)=>(
          <div key={h.id} className="section">
            <h3 className="sectionTitle" onClick={()=>setShowDetail(h)}>
              {h.title}
            </h3>
          <div className="sectionButton">
            <span>🔥 {h.streak}</span>
            <button className="MarkBtn"onClick={()=>markDone(h.id)}>✔</button>
            <button className="delBtn" onClick={()=>deleteHabit(h.id)} style={{color:"Red", background:"none"}}>🗑</button>
         </div>  

      </div>
       ) )}
      </div>
      <div className="detailPanel">
              {showDetail && (
        <div className="popUpTitle">
          <div className="Info">
            <h2>Habit Details</h2>
            <p><b>Title:</b>{showDetail.title}</p>
            <p><b>Start Date:</b>{showDetail.startDate}</p>
            <p className="streak"></p>
            <p className="streakCount"> {showDetail.streak} days</p>
  
        <br/>
        <button className="closeBtn" onClick={()=>setShowDetail(null)} style={{marginTop: "10px"}}>close</button>
          </div>
        </div>
      )}
      </div>
      </div>

      {showForm && (
        <div className="popUpAdd">
        <div className="addhabitform">
          <h2>Add New Habit</h2>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            
            <input
            type="text"
            value={newHabit.title}
            onChange={(e)=>setNewHabit({...newHabit, title:e.target.value})}
            />
            <label>Start Date:</label>
              <input
                type="date"
                value={newHabit.startDate}
                onChange={(e)=>setNewHabit({...newHabit, startDate:e.target.value})}
  />

            <button type="submit">✅ Submit</button>
            <button type="button" onClick={()=>setShowForm(false)} style={{marginLeft:"10px"}}>❌ Cancel</button>

            
          </form>

        </div>
        </div>
      )}

  

    </div>
    
  );
 



}


export default Habits;
