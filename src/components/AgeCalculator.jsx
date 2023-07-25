import React, { useRef } from "react";
import { useState } from "react";
import { subDays, subMonths, subYears } from "date-fns";

export default function AgeCalculator() {

const [error, setError] = useState(false)
const [fecha, setFecha] = useState({años: "", meses: "",dias: ""})

  const day = useRef();
  const month = useRef();
  const year = useRef();

  const [errorDays, setErrorDays] = useState("")
  const [errorMonths, setErrorMonths] = useState("")
  const [errorYears, setErrorYears] = useState("")
 

  const calcularEdad = () => {
    const error = validarErrores();
    setError(false)
      console.log(errorDays)
      console.log(errorMonths)
      console.log(errorYears)
    if (error === 1) {
       
        setError(false)
      let date = new Date();
      let years = subYears(date, year.current.value);
      let months = subMonths(years, month.current.value);
      let days = subDays(months, day.current.value);
      setFecha({
        años: years.getFullYear(),
        meses: months.getMonth(),
        dias: days.getDate(),
      });
      console.log(day.current.value)
    }
    else{
        setError(true);
    }

  };

  const validarErrores = () => {
    let error = 1;
    if (day.current.value == "") {
        setErrorDays("The field is required")
        error = 0;
       
     } else if (day.current.value < 0 || day.current.value > 31) {
      setErrorDays("Must be a valid day")
       error = 0
    } else{ setErrorDays("")}

    //meses errores
    if (month.current.value == "") {
        setErrorMonths("The field is required")
        error = 0;
       
     } else if (month.current.value < 0 || month.current.value > 12) {
      setErrorMonths("Must be a valid month")
       error = 0
    } else{ setErrorMonths("")}
      
    //años errores
    if (year.current.value == "") {
        setErrorYears("The field is required")
        error = 0;
       
     } else if (year.current.value < 0) {
      setErrorYears("Must be a valid year")
       error = 0
    } else{ setErrorYears("")}
      
      return error;
    
  };

  return (
    <div className="bg-White mx-5 w-10/12 h-max rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[30%] flex flex-col justify-center md:pr-[10%] max-w-2xl">
      <div className="flex flex-row pt-10 px-8">
        <label>
          <span className={errorDays === "" ? "block font-poppins font-normal text-xs text-Smokey-grey tracking-widest ":
                                                "block font-poppins font-normal text-xs text-red-400 tracking-widest"}>
            DAY
          </span>
          <input
          
            ref={day}
            type="number"
            className={errorDays === "" ? "border-Off-white p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3" :
            "border-red-400 p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3"}
          />
          
        </label>
        <label>
          <span className={errorMonths === "" ? "block font-poppins font-normal text-xs text-Smokey-grey tracking-widest":
                                                "block font-poppins font-normal text-xs text-red-400 tracking-widest"}>
            MONTH
          </span>
          <input
            ref={month}
            className={errorMonths === "" ? "border-Off-white p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3" :
            "border-red-400 p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3"}
            type="number"
          />
        </label>
       
        <label>
          <span className={errorYears === "" ? "block font-poppins font-normal text-xs text-Smokey-grey tracking-widest":
                                                "block font-poppins font-normal text-xs text-red-400 tracking-widest"}>
            YEAR
          </span>
          <input
            ref={year}
            className={errorYears === "" ? "border-Off-white p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3" :
                                "border-red-400 p-3 font-poppins w-11/12 h-10 mt-1 border-solid border-2 rounded-lg mr-3"}
            type="number"
          />
        </label>
      </div>
      <div className="grid grid-cols-3 pl-8 pr-8">
        <span className={errorDays !== "" ? "text-[10px] text-red-600 mr-3" : "text-[9px] text-white"}>{errorDays}</span>
        <span className={errorMonths !== "" ? "text-[10px] text-red-600 mr-3" : "text-[9px] text-white"}>{errorMonths}</span>
        <span className={errorYears !== "" ? "text-[10px] text-red-600 " : "text-[9px] text-white"}>{errorYears}</span>
        
        
      
      
      </div>
      <div className="flex flex-col justify-center items-center md:items-end mt-12 mb-5">
        <hr className="border-1 border-solid border-Off-white w-11/12" />
        <button
          onClick={calcularEdad}
          className="  h-16 w-16 bg-botones bg-[length:40%]  bg-Purple bg-center bg-no-repeat rounded-full -mt-7"
        ></button>
      </div>
      <div className="flex flex-col justify-center pl-10 pb-10">
        <h1 className="text-5xl font-extrabold font-poppins italic md:text-[80px]">
        {error == false ? <span className="text-Purple md:text-[80px]">{fecha.años}</span> : <span className="text-Purple md:text-[80px]">--</span>}
      
           years
        </h1>
        <h1 className="text-5xl font-extrabold font-poppins italic md:text-[80px]">
        {error == false ? <span className="text-Purple md:text-[80px]">{fecha.meses}</span> : <span className="text-Purple md:text-[80px]">--</span>}
            months
        </h1>
        <h1 className="text-5xl font-extrabold font-poppins italic md:text-[80px]">
        {error == false ? <span className="text-Purple md:text-[80px]">{fecha.dias}</span> : <span className="text-Purple md:text-[80px]">--</span>}
          days
        </h1>
      </div>
    </div>
  );
}
