import React, { useState } from "react";

export default function Projet() {
  const [inp1, setInp1] = useState();
  const [inp2, setInp2] = useState();

  const push = "push";
  const unshift = "unshift";
  const splice = "splice";
  const pop = "pop";
  const shift = "shift";
  const map = "map";
  const filter = "filter";
  const reduce = "reduce";
  const include = "include";

  const [pushResult, setPushResult] = useState([]);
  const [unshiftResult, setUnshiftResult] = useState([]);
  const [spliceResult, setSpliceResult] = useState([]);
  const [popResult, setPopResult] = useState([]);
  const [shiftResult, setShiftResult] = useState([]);
  const [mapResult, setMapResult] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [reduceResult, setReduceResult] = useState([]);
  const [includeResult, setIncludeResult] = useState([]);
  const [nbr,setNbr] = useState()
  const [del, setDel] = useState();
  const [ajo, setAjo] = useState();
  const [ind, setInd] = useState();
  const [numbeer, setNumbeer] = useState();

  const initialArray = [11, 5, 8, 7, 1, 7];

  const handlePush = () => {
    const newArray = [...initialArray];
    newArray.push(Number(inp1));
    setPushResult(newArray);
  };

  const handleUnshift = () => {
    const newArray = [...pushResult];
    newArray.unshift(Number(inp2));
    setUnshiftResult(newArray);
  };
  const handleSplice = () => {
      const delet = del
      const ajout = ajo
      const index = ind
      const newArray = [...unshiftResult];
    newArray.splice(Number(index), Number(delet), Number(ajout));
    setSpliceResult(newArray);
  };

  const handlePop = () => {
    const newArray = [...spliceResult];
    newArray.pop();
    setPopResult(newArray);
  };

  const handleShift = () => {
    const newArray = [...popResult];
    newArray.shift();
    setShiftResult(newArray);
  };

  const handleMap = (e) => {
    const value = e.target.value
    const newArray = [...shiftResult];
        if (value === "plus") {
      setMapResult(newArray.map((v) => v + Number(numbeer)));
    } else if (value === "moins") {
      setMapResult(newArray.map((v) => v - Number(numbeer)));
    } else if (value === "slash") {
      setMapResult(newArray.map((v) => v / Number(numbeer)));
    } else if (value === "darb") {
      setMapResult(newArray.map((v) => v * Number(numbeer)));
    } else if (value === "ouss") {
      setMapResult(newArray.map((v) => v ** Number(numbeer)));
    }
  
  };

  const handleFilterPair = () => {
    const result = mapResult.filter((v) => v % 2 === 0);
    setFilterResult(result);
  };

  const handleFilterImpair = () => {
    const result = mapResult.filter((v) => v % 2 !== 0);
    setFilterResult(result);
  };

  const handleReduce = () => {
    const result = mapResult.reduce((acc, curr) => acc + curr, 0);
    setReduceResult(result);
  };
  const handleInclude = () => {
    if(mapResult.includes(Number(nbr))){
        setIncludeResult("True")
    }
    else setIncludeResult("false")
  }
  return (
    <>
      <table border="2px">
        <thead>
          <tr>
            <th>Méthode</th>
            <th>Initial Tableau</th>
            <th>inputs</th>
            <th>Résultat</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{push}</td>
            <td>
              {initialArray.join(", ")}
              
            </td>
            <td><input
                type="number"
                value={inp1}
                onChange={(e) => setInp1(e.target.value)}
              /></td>
            <td>{pushResult.join(", ")}</td>
            <td>
              <button onClick={handlePush}>Push</button>
            </td>
          </tr>
          <tr>
            <td>{unshift}</td>
            <td>
              {pushResult.join(", ")}
              
            </td>
            <td><input
                type="number"
                value={inp2}
                onChange={(e) => setInp2(e.target.value)}
              /></td>
            <td>{unshiftResult.join(", ")}</td>
            <td>
              <button onClick={handleUnshift}>Unshift</button>
            </td>
          </tr>
          <tr>
            <td>{splice}</td>
            <td>{initialArray.join(", ")}</td>
            <td>
                <input type="number"  placeholder="entrer la valeur"value={ajo}
                onChange={(e) => setAjo(e.target.value)}/>
                <input type="number"  placeholder="entrer l'index"value={ind}
                onChange={(e) => setInd(e.target.value)}/>
                <input type="number"  placeholder="entrer le nombre de valeur doit etre supprimer"value={del}
                onChange={(e) => setDel(e.target.value)}/>
            </td>
            <td>{spliceResult.join(", ")}</td>
            <td>
              <button onClick={handleSplice}>Splice</button>
            </td>
          </tr>
          <tr>
            <td>{pop}</td>
            <td>{initialArray.join(", ")}</td>
            <td>Delet the last number</td>
            <td>{popResult.join(", ")}</td>
            <td>
              <button onClick={handlePop}>Pop</button>
            </td>
          </tr>
          <tr>
            <td>{shift}</td>
            <td>{initialArray.join(", ")}</td>
            <td>Delet the First number</td>
            <td>{shiftResult.join(", ")}</td>
            <td>
              <button onClick={handleShift}>Shift</button>
            </td>
          </tr>
          <tr>
            <td>{map}</td>
            <td>{initialArray.join(", ")}</td>
            <td>
                <input type="number" placeholder="entrer le nbr " value={numbeer} onChange={(e)=>setNumbeer(e.target.value)}/>
                <select onChange={handleMap}>
                <option value="" disabled selected>
                  Select an operator
                </option>
                <option value="plus">+</option>
                <option value="moins">-</option>
                <option value="slash">/</option>
                <option value="darb">x</option>
                <option value="ouss">**</option>
              </select>
            </td>
            <td>{mapResult.join(", ")}</td>
            <td>
              <button onClick={handleMap}>Map</button>
            </td>
          </tr>
          <tr>
            <td>{filter}</td>
            <td>{mapResult.join(", ")}</td>
            <td>Filtrer</td>
            <td>{filterResult.join(", ")}</td>
            <td>
              <button onClick={handleFilterPair}>Filter Pair</button>
              <button onClick={handleFilterImpair}>Filter Impair</button>
            </td>
          </tr>
          <tr>
            <td>{reduce}</td>
            <td>{mapResult.join(", ")}</td>
            <td>Calculer la somme</td>
            <td>{reduceResult}</td>
            <td>
              <button onClick={handleReduce}>Reduce</button>
            </td>
          </tr>
          <tr>
            <td>{include}</td>
            <td>{mapResult.join(", ")}</td>
            <td><input type="number" placeholder="entrer le nbr doit etre chercher" value={nbr} onChange={(e)=>setNbr(e.target.value)} /></td>
            <td>{includeResult}</td>
            <td>
              <button onClick={handleInclude}>Reduce</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
