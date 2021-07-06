import React, { Component } from 'react'
import { createElement } from 'react/cjs/react.production.min';

export default class Form extends Component {
    state={
        date:new Date()
    }
    onChange= date=>{
        this.setState({
            date:date
        })
    }



    ok=()=>{
        
        let form=document.getElementsByClassName("ntm")[0];
        form.classList.toggle("displayno");
        form.classList.toggle("tresflex") ; 
        let valuenom=document.getElementsByClassName("myNom")[0];
        let valueDate=document.getElementsByClassName("myDate")[0];
        let valueHeureDebut=document.getElementsByClassName("myHeureDebut")[0];
        let valueHeureFin=document.getElementsByClassName("myHeureFin")[0];
        let newRow=document.createElement("div");
        newRow.classList.add("row");
        let col1=document.createElement("div");
        col1.classList.add("col");
        let col2=document.createElement("div");
        col2.classList.add("col");
        col2.textContent=valuenom.value;
        let col3=document.createElement("div");
        col3.classList.add("col");
        col3.textContent=valueDate.value;
        let col4=document.createElement("div");
        col4.classList.add("col");
        col4.textContent=valueHeureDebut.value;
        let col5=document.createElement("div");
        col5.classList.add("col");
        col5.textContent=valueHeureFin.value;
        let parent=document.getElementsByClassName('parent')[0];
        newRow.append(col1,col2,col3,col4,col5);

        parent.append(newRow);
        console.log(parent);
        console.log(newRow);
        valueDate.value="";
        valueHeureDebut.value="";
        valuenom.value="";
        valueHeureFin.value="";

    }
    render() {
        let popo;
        return (
            <div>
                <div className="displayno ntm justify-content-center flex-column " >
      <label>Nom Tâche :</label>
      <input placeholder="Nom" className="myNom"></input>
      <label>Date:</label>
      <input placeholder="Date" className="myDate"></input>
      <label>heure debut:</label>
      <input placeholder="20h00" className="myHeureDebut"></input>
      <label>heure fin :</label>
      <input placeholder="21h00" className="myHeureFin"></input>
      <div className="d-flex justify-content-center w-50">
      <button className="ok " onClick={this.ok}>ok</button>
      </div>
    </div>
            </div>
        )
    }
}
