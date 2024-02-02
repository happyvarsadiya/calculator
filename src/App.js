import './App.css';
import {useState} from 'react';

function App() {
    
  // // const [resultValue, setResultValue] = useState('');
  
  // // const handleBtnClick = (buttonValue) => {
  // //   if (resultValue === '') {
  // //     setResultValue(buttonValue);
  // //   } else {
  // //     setResultValue(resultValue + buttonValue);
  // //   }
  // // };

  // // const handleCalculate = () => {
  // //   try {
  // //     setResultValue(eval(resultValue).toString());
  // //   } catch (error) {
  // //     setResultValue('Error');
  // //   }
  // // };
  
  // return (
  //   <div className="App">
  //       <table id="calcu"> 
  //       <tr> 
  //           <td colSpan="3"> 
  //               <input type="text" id="result" value={resultValue}></input> 
  //           </td> 
  //           <td><input type="button" value="c" onClick={e => setResultValue('')}></input></td>
  //       </tr> 
  
  //       <tr> 
  //           <td><input type="button" value="1" onClick={() => handleBtnClick('1')}></input></td> 
  //           <td><input type="button" value="2" onClick={() => handleBtnClick('2')}></input></td> 
  //           <td><input type="button" value="3" onClick={() => handleBtnClick('3')}></input></td> 
  //           <td><input type="button" value="/" onClick={() => handleBtnClick('/')}></input></td> 
  //       </tr> 
  //       <tr> 
  //           <td><input type="button" value="4" onClick={() => handleBtnClick('4')}></input></td> 
  //           <td><input type="button" value="5" onClick={() => handleBtnClick('5')}></input></td> 
  //           <td><input type="button" value="6" onClick={() => handleBtnClick('6')}></input></td> 
  //           <td><input type="button" value="*" onClick={() => handleBtnClick('*')}></input></td> 
  //       </tr> 
  //       <tr> 
  //           <td><input type="button" value="7" onClick={() => handleBtnClick('7')}></input></td> 
  //           <td><input type="button" value="8" onClick={() => handleBtnClick('8')}></input></td> 
  //           <td><input type="button" value="9" onClick={() => handleBtnClick('9')}></input></td> 
  //           <td><input type="button" value="-" onClick={() => handleBtnClick('-')}></input></td> 
  //       </tr> 
  //       <tr> 
  //           <td><input type="button" value="0" onClick={() => handleBtnClick('0')}></input></td> 
  //           <td><input type="button" value="." onClick={() => handleBtnClick('.')}></input></td> 
  //           <td><input type="button" value="=" onClick={handleCalculate}></input></td> 
  //           <td><input type="button" value="+" onClick={() => handleBtnClick('+')}></input></td> 
  //       </tr> 
  //   </table>
  //   </div>
  // );

  
	let [display, setdisplay] = useState("")
	let [firstval, setfirstval] = useState("")
	let [sign, setsign] = useState("")

	const getdata = (x) => {
		setdisplay(display + x);
	}
	const caldata = (m) => {
		setfirstval(display)
		setdisplay("")
		setsign(m)
	}
	const handleEquals = () => {
		const lastval = display;
		switch (sign) {
			case 1:
				setdisplay((parseFloat(firstval) + parseFloat(lastval)));
				break;
			case 2:
				setdisplay((parseFloat(firstval) - parseFloat(lastval)));
				break;
			case 3:
				setdisplay((parseFloat(firstval) * parseFloat(lastval)));
				break;
			case 4:
        if(parseInt(lastval)==0)
        {
          setdisplay(Infinity)
        }else{
  				setdisplay((parseFloat(firstval) / parseFloat(lastval)));
        }
				break;
			case 5:
				setdisplay((parseFloat(firstval) % parseFloat(lastval)));
				break;
			default:
				setdisplay("Error");
		}
	}
	const handleClear = () =>{
		setdisplay("")
	}
	const singledel = () =>{
		setdisplay((prevdisplay)=>prevdisplay.slice(0,-1));
	}

	return (
		<div className="App">

			<div class="main_div">
				<div class="text">
					<input type="text" name="" value={display} ></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"%"} onClick={() => caldata(5)} ></input>
					<input type="button" name="" value={"C"} onClick={() => handleClear()}></input>
					<input type="button" name="" value={"Del"} onClick={() => singledel()}></input>
					<input type="button" name="" value={"/"} onClick={() => caldata(4)}></input>
				</div>
				<div class="btn">
				</div>
				<div class="btn">
					<input type="button" name="" value={"7"} onClick={() => getdata(7)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"8"} onClick={() => getdata(8)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"9"} onClick={() => getdata(9)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"*"} onClick={() => caldata(3)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"4"} onClick={() => getdata(4)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"5"} onClick={() => getdata(5)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"6"} onClick={() => getdata(6)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"-"} onClick={() => caldata(2)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"1"} onClick={() => getdata(1)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"2"} onClick={() => getdata(2)} style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"3"} onClick={() => getdata(3)}style={{backgroundColor:"#5C5B57"}}></input>
					<input type="button" name="" value={"+"} onClick={() => caldata(1)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"+"} onClick={() => caldata()} style={{backgroundColor:"#5C5B57"}} ></input>
					<input type="button" name="" value={"0"} style={{backgroundColor:"#5C5B57"}} onClick={()=>getdata(0)}></input>
					<input type="button" name="" value={"."}style={{backgroundColor:"#5C5B57"}} onClick={() => getdata(".")} ></input>
					<input type="button" name="" value={"="} onClick={() => handleEquals()} style={{backgroundColor:"#91908C"}}></input>
				</div>
			</div>

		</div>
	);
}

export default App;
