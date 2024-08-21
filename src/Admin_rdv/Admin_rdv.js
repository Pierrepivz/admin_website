import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../calendar.css';
import '../globals.css';
import "../rdv.css";
import moment  from 'moment';




export default function Admin_rdv(){
  
  
  const today = new moment().add(3,"month").format('MM/DD/YYYY');
  const maxDate = new Date(today);
  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');  
  const [nom, setNom] = useState('');
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState([moment(),moment()]);
  const startday = moment(range[0]).format("DD/MM/YYYY");
  const endday = moment(range[1]).format("DD/MM/YYYY");
  const [hour, setHour] = useState('');
  const [index,setIndex] = useState(0);
  const [heure_dispo, setDispoH] = useState([]);
  const [journee_dispo, setDispoJ] = useState([]);
  const sqldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const sqlfulldate = moment(sqldate).format("YYYY-MM-DD");
  const [Listset, setDatalist] = useState([]);
  const tab_creneaux = ["10 h","12 h","16 h","18 h"];
  var hourcolor = document.querySelectorAll("#hour_id");

  
  
      const dataimport = () => {

        axios.get('https://server-test-3emq.onrender.com/api/getrdv')
          .then((response) =>  { 
            setDatalist(response.data);
        }
          );

      }
  
      
  
      useEffect (() => {

         dataimport();
         available();
        
        
        }, []); 
    
    const datelist = Listset.map( value => value.date);
    const idlist = Listset.map(value => value.id);
    const datatab = Listset.map( value => [{data: value.date , hour: value.heure , dispo: value.dispo}] );
    const tabvaleurs = datatab.flat();
    const indextab = (element) =>  (moment(element["data"]).format("YYYY-MM-DD") == moment(date).format("YYYY-MM-DD") && element["hour"] == hour);
    const elementid = tabvaleurs.findIndex(indextab);
    const rdvid = idlist[elementid];
    const [rdvdujour, setRdv] = useState([]);


    for(var i = 0 ; i < datelist.length ; i++){
    
        if(datelist[i] == datelist[i+1]){
             
            datelist.splice(i,1);
           
        
        }
        


    }

  

  

  function available(){
    /* init */
    const tabdispo = ["10 h","12 h","16 h","18 h"];
    const tableau_complet = [];
    const reserved_tab = [];
    const clienttab = [];
    const offtab = [];
    
    

    if(date.getDay() === 0){

      
      return [];

    }
    

    /* tableau des créneaux réservés  */
    
    for(var i = 0; i < tabvaleurs.length ; i++){

        
      
        const d1 = new Date(tabvaleurs[i]["data"]);
        const d2 = `${d1.getFullYear()}-${d1.getMonth()+1}-${d1.getDate()}`;


        if(d2 == sqldate){

         

            reserved_tab.push(tabvaleurs[i]["hour"]);

            if(tabvaleurs[i]["dispo"] == 1){

              offtab.push(tabvaleurs[i]["hour"]);
              

            }

            if(tabvaleurs[i]["dispo"] == 3){

              offtab.push(tabvaleurs[i]["hour"]);
              

            }

            if(tabvaleurs[i]["dispo"] == 2){

              clienttab.push(tabvaleurs[i]["hour"]);
              
            }
            
            


        }
       
    
    }
    
    /* création du tableau final comprenant les créneaux réservés et disponibles */
    
    
    for(var e = 0; e < tabdispo.length ; e++){
    
    if(reserved_tab.includes(tabdispo[e])){


      if(clienttab.includes(tabdispo[e])){

        tableau_complet.push([{status: "date unavailable" , hour: tabdispo[e]}]);

      }
      if(offtab.includes(tabdispo[e])){
      
        tableau_complet.push([{status: "date offhour" , hour: tabdispo[e]}]);

      }
    
      
    
    }else{
    
      tableau_complet.push([{status: "date colored" , hour: tabdispo[e]}]);
    
    }
    }
    
    const tableau_des_rendez_vous = tableau_complet.flat();
    

    if(tableau_des_rendez_vous.every( data => data.status == "date offhour") == true){

      setDispoJ(["bouton_on","bouton_off","indisponible"]);

    }else{

      setDispoJ(["bouton_off","bouton_on","disponible"]);

    }

        
      
      setRdv(tableau_des_rendez_vous);

  }



  const onChange = date => {

    setDate(date);
    available();
    
    
    
    
    
  };

  
          
  

  const rangeselect = range => {

   setRange(range); 
   

  }

  const insertrange = () => {
   
    const start = moment(range[0]);
    const day = start;
    
    if(window.confirm("voulez vous rendre cette période insdisponible ?")){
    
    while(day.format("DD-MM-YYYY") <= moment(range[1]).format("DD-MM-YYYY") ){

    if(day.day() != 0){
    
    
      for( var e = 0 ; e < tab_creneaux.length ; e++ ){ 

      axios.post('https://server-test-3emq.onrender.com/api/insertoffhour',{

        date: day.format("YYYY-MM-DD"),
        hour: tab_creneaux[e],
        dispo: 1,
        
      
      });
    
    }
      

    }
    
    day.add(1,"day");

    }


  }

  }

  const deleterange = () => {
   
    const start = moment(range[0]);
    const day = start;
    
    if(window.confirm("voulez vous rendre cette période disponible ?")){
    
    while(day.format("DD-MM-YYYY") <= moment(range[1]).format("DD-MM-YYYY") ){

    if(day.day() != 0){
    
    
      const deletedate = day.format("YYYY-MM-DD");

      axios.delete(`https://server-test-3emq.onrender.com/api/deleterdvdate/${deletedate}`);
    
    
      

    }
    
    day.add(1,"day");

    }


  }

  }



  const add_reserved_rdv = (i) => {

   

    if(window.confirm("voulez vous rendre ce créneau indisponible ?")){

      if(i==3){
      
      for( var e = 0 ; e < tab_creneaux.length ; e++ ){ 
        axios.post('https://server-test-3emq.onrender.com/api/insertoffhour',{

        
        
        date: sqldate,
        hour: tab_creneaux[e],
        dispo: 1,
         
      
      });}
      rdvdujour.forEach(data =>  {data.status =  "date offhour"});
      setDispoJ(["bouton_on","bouton_off","indisponible"])

      }else{

      axios.post('https://server-test-3emq.onrender.com/api/insertoffhour',{

        
        
        date: sqldate,
        hour: hour,
        dispo: 1,
         
      
      });
      setDispoH(["bouton_on","bouton_off","indisponible"]);
      
      
      
      }

         

    }

  dataimport();
    
  }
  const delete_reserved_rdv = (f) => {

    
    if(window.confirm("voulez vous rendre ce créneau disponible ?")){

      if(f == 1){
    
      axios.delete(`https://server-test-3emq.onrender.com/api/deleterdv/${rdvid}`);
      setDispoH(["bouton_off","bouton_on","disponible"]);
     
    
    }

    if(f == 3){
       
      
      
      axios.delete(`https://server-test-3emq.onrender.com/api/deleterdvdate/${sqlfulldate}`)
      .then((response) =>  { 

      

       



    }
      );
      setDispoH(["bouton_off","bouton_on","disponible"]);
      dataimport();
    
    }
      
      
    }

    dataimport();
    
  }



  function hourselect(index,dispo){

    var tab = ["10 h","12 h","16 h","18 h"];
    setHour(tab[index]);
    setIndex(index);


    hourcolor.forEach( (element) => {
      if(element.classList.contains("selected")){
      element.classList.remove("selected");
    }
    });
    if(hour != ''){
    hourcolor[index].classList.add("selected");
  }


    if(dispo == "date offhour"){
    
    setDispoH(["bouton_on","bouton_off","indisponible"])}else{
    
    setDispoH(["bouton_off","bouton_on","disponible"]);

    };
    
    
    
    
  };

 

    return (



      <div class="rdv block">
      

      <div id="titre_second"class='column_items_center block'>
                              
                              <h1title>Gestion des rendez vous</h1title>
          
                              <h2under></h2under>
                              
                              
                              
                        </div>

  <div class="column window">

    


   
   



     
   <div class="column_items_center Page">

   

<div class="column_start">
<h2title>Date et Heure</h2title><i class="fa-solid fa-calendar" id="icon"></i>

     <h2under2></h2under2></div>
<div class="datetime column_items_center">


<content><Calendar 
class="calendar" onChange={onChange} value={date} view="week" minDate={new Date(Date.now())} maxDate={maxDate} 
/>



</content>



<div class='select column'>

<div class="hourlistselection">
    {rdvdujour.map((data,index) => 
    
    <div class={data.status} key={index} id="hour_id"  onClick={(e) => {hourselect(index,data.status)}}>
        <content>{data.hour}</content>
        </div>
        
        )}


</div>



</div>



</div>



</div>

<div class="rdv_management column_items_center">

    <div class="row">

    <h2title>Créneau de la journée du <h1title>{sqldate} </h1title>:<blue> {journee_dispo[2]}</blue></h2title>
    
    </div>
    
    <div class="manage_dispo"><buton class="bouton_2" id={journee_dispo[0]} onClick={(e) => delete_reserved_rdv(3)}><content>Disponible</content></buton><buton class="bouton_2" id={journee_dispo[1]} onClick={(e) => add_reserved_rdv(3)}><content>Indisponible</content></buton></div>

    <br/><br/><br/>
    <div class="row"> <h2title>Créneau de {hour} :</h2title> <br/>
    <h2title><blue> {heure_dispo[2]}</blue> </h2title></div><br/><br/>
    
    <div class="manage_dispo"><buton class="bouton" id={heure_dispo[0]} onClick={(e) => delete_reserved_rdv(1)}><content>Disponible</content></buton><buton class="bouton" id={heure_dispo[1]} onClick={(e) => add_reserved_rdv(1)}><content>Indisponible</content></buton></div>
    
    </div>

<br/><br/>

<div class="line_between">
    <Calendar 
class="calendar block" view="week" onChange={rangeselect} minDate={new Date(Date.now())} maxDate={maxDate} selectRange="true"
/>

<div class="rdv_management column_items_center">
   <h2title>Période selectionnée : </h2title>
    <h1title>{startday}</h1title>
    <h1title>{endday}</h1title>
    <br/>
    <div class="row">

    
    <div class="manage_dispo"><buton class="bouton_2" onClick={deleterange} ><content>Disponible</content></buton><buton class="bouton_2"  onClick={insertrange}><content>Indisponible</content></buton></div>
    </div>
    </div>

</div>
<br/><br/>
 

                 
<div class="booked_rdv">

{Listset.map( value => <content class="rdvlist">
    
{value.prenom}<br/>
{value.nom}<br/>
{value.email}<br/>
{value.date.slice(0,10)}<br/>
{value.heure}
{value.dispo}
<br/><br/>


</content>)}
        
             
            
                    
            
            
            
    
     
    
    </div>


    



  
    
    
    </div> 
        
        





      </div>
    );
  }