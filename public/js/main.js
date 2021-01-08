const submitBtn=document.getElementById("SubmitBtn");
const cityName=document.getElementById('cityName');
const OutputMsg=document.getElementById('city_name');
const Temprature=document.getElementById('temp_temp');
const temp_status=document.getElementById('temp_status');
const MinMaxTemp=document.getElementById('MinMaxTemp');
const WindSpeed=document.getElementById('WindSpeed');
const dataHide=document.querySelector('.middle_layer')
submitBtn.addEventListener('click',async(event)=>{
    event.preventDefault();
    let cityValu=cityName.value;
    if(cityValu===""){
        OutputMsg.innerText=`Please Enter the City Name..!!`;
        dataHide.classList.add('data_hide')
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValu}&appid=8280c65a710afcb839f30024910ef9cc`
            const response=await (await fetch(url)).json();
            const ArrData=[response]
            OutputMsg.innerText=`${ArrData[0].name},${ArrData[0].sys.country}`
            Temprature.innerText=`${parseInt(ArrData[0].main.temp_min-273.15)}`;
            tempStatus=ArrData[0].weather[0].main;
            MinMaxTemp.innerText=`Min & Max Temp: ${parseInt(ArrData[0].main.temp_max-273.15)} | ${parseInt(ArrData[0].main.temp_min-273.15)}`;
            WindSpeed.innerText=`Wind Speed: ${ArrData[0].wind.speed}Km/h`
            if(tempStatus=='Clear'){
                temp_status.innerHTML='<i class="fas fa-sun" style="font-size: 80px;color: #eccc68;margin-left:0%;margin-top:10%"></i>';
            }
            else if(tempStatus=='Smoke')
            {
                temp_status.innerHTML='<i class="fas fa-smog" style="font-size: 80px;color: #738276;margin-left:0%;margin-top:10%"></i>';
            }
            else if(tempStatus=='Mist')
            {
                temp_status.innerHTML='<i class="fas fa-smog" style="font-size: 80px;color: #738276;margin-left:0%;margin-top:10%"></i>';
            }
            else if(tempStatus=='Clouds'){
                temp_status.innerHTML='<i class="fas fa-cloud" style="font-size: 80px;color: #f1f2f6;margin-left:0%;margin-top:10%"></i>'
            }
            else if(tempStatus=='Rain'){
                temp_status.innerHTML='<i class="fas fa-cloud-showers-heavy" style="font-size: 80px;color: #f1f2f6;margin-left:0%;margin-top:10%"></i>'
            }
            else if(tempStatus=='Snow'){
                temp_status.innerHTML='<i class="far fa-snowflake" style="font-size: 80px;color: #f1f2f6;margin-left:0%;margin-top:10%"></i>'
            }
            dataHide.classList.remove('data_hide')
        }catch{
            OutputMsg.innerText=`Please Enter the City Name Properly..!!`;
            dataHide.classList.add('data_hide')
        }
    }
    
})
const getCurrentDay=()=>{
    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    let currentTime=new Date();
    // console.log(currentTime.getDay())
    let DATE=weekday[currentTime.getDay()]
    return DATE;
};
document.getElementById('day').innerText=`${getCurrentDay()}`
const getCurrentTime=()=>{
    var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    var now=new Date();
    var month=months[now.getMonth()];
    var date=now.getDate();
    // var year=now.getFullYear();
    let hours= now.getHours();
    let min= now.getMinutes();
    let periods="AM";
    if(hours > 11){
         periods='PM';
         if(hours> 12) hours -= 12
    }if(min<10){
        min="0"+min;
    }
    return `${month} ${date} | ${hours}:${min}${periods}`;
    // console.log(date+"/"+month+"/"+year)
    // console.log()
}
document.getElementById('today_data').innerText=`${getCurrentTime()}`