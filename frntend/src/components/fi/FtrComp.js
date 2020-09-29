import React, { useState, useEffect } from 'react'
import '../../css/FtrComp.css'
import { useHistory } from 'react-router-dom'
import SLTLDBConnection from '../../apis/SLTLDBConnection'

//Toastify
import { notifyError, notifySuccessQk } from '../../utils/toastify'
import Login from '../../screens/Login'


function shallowEqual(object1, object2) {
     const keys1 = Object.keys(object1);
     const keys2 = Object.keys(object2);

     if (keys1.length !== keys2.length) {
          return false;
     }

     for (let key of keys1) {
          if (object1[key] != object2[key]) {
               return false;
          }
     }
     return true;
}

const FtrComp = ({ tireDetails }) => {
     let history = useHistory()
     //Destructrue props
     const { tiresizebasic,
          lugtype,
          config,
          rimsize,
          tiretypecap,
          brand,
          swmsg,
          moldno,
          pid,
          moldid,
          sn

     } = tireDetails

     //Initial state of useStates
     const initDefSummery = {
          tf: 0,
          mm: 0,
          ld: 0,
          bo: 0,
          bg: 0,
          bfm: 0,
          trfm: 0,
          speu: 0,
          sndp: 0,
          other: 0,
          nmdirty: 0,
     }
    

     const [hd, setHd] = useState("")
     const [defSummery, setDefSummery] = useState(initDefSummery)
   
     //Destructre states
     const { tf, mm, ld, bo, bg, bfm, trfm, speu, sndp, other, nmdirty } = defSummery
    

    

     const handleInputChange = (e) => {
          const target = e.target;
          switch (target.name) {
               case "tf":
                    setDefSummery({ ...defSummery, tf: e.target.value })
                    break
               case "mm":
                    setDefSummery({ ...defSummery, mm: e.target.value })
                    break
               case "ld":
                    setDefSummery({ ...defSummery, ld: e.target.value })
                    break
               case "bo":
                    setDefSummery({ ...defSummery, bo: e.target.value })
                    break
               case "bg":
                    setDefSummery({ ...defSummery, bg: e.target.value })
                    break
               case "bfm":
                    setDefSummery({ ...defSummery, bfm: e.target.value })
                    break
               case "trfm":
                    setDefSummery({ ...defSummery, trfm: e.target.value })
                    break
               case "speu":
                    setDefSummery({ ...defSummery, speu: e.target.value })
                    break
               case "sndp":
                    setDefSummery({ ...defSummery, sndp: e.target.value })
                    break
               case "nmdirty":
                    setDefSummery({ ...defSummery, nmdirty: e.target.value })
                    break
               case "other":
                    setDefSummery({ ...defSummery, other: e.target.value })
                    break
          }

     }

    
     //ButtonHandlers------------------------
     //Set HD
     const clickHandler = (e) => {
          setHd(e.target.name)
     }

     //Enter data
     const btnTireGradeHandler = async () => {
          const updatedRestaurant = await SLTLDBConnection.put(`/fi/fi/${sn}`, {
               sn,
               pid,
               moldno,
               moldid,
               userid: 5,
               username: "xxx",
               tf,
               mm,
               ld,
               bo,
               bg,
               bfm,
               trfm,
               speu,
               sndp,
               other,
               nmdirty
              
          });
          //Hide button itself
          // document.getElementById("btnEnter").style.visibility = 'hidden'

          console.log(updatedRestaurant);
          if (updatedRestaurant.data.error) {
               return notifyError(updatedRestaurant.data.error)
          }

          history.push(`/fi`)
          notifySuccessQk('updated')
     }

     const goBackHandler = () => {
          history.push(`/fi`)
     }
     return (
          <div className='fi-container'>
               <div className="row">
                    <div className='tire-detail'>
                         {tiresizebasic} {lugtype} {config} {rimsize} {tiretypecap} {brand} / {swmsg}
                         <br />
                         <p>MoldNo:-{moldno}</p>
                    </div>
               </div>
               <div className="btn-toolbar">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                         HD:-{hd}
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='60'>60</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='61'>61</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='62'>62</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='63'>63</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='64'>64</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='65'>65</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='66'>66</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='67'>67</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='68'>68</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='69'>69</button>
                         <button onClick={e => clickHandler(e)} type="button" className="btn btn-secondary" name='70'>70</button>
                    </div>
               </div>
               <div className='table-containter'>
                    <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">

                         <tbody>
                              <tr className="table-warning">
                                   <td>US Reading</td>
                                   <td><input type='number' className='form-control ' /></td>
                                   <td>
                                        <button

                                             onClick={goBackHandler}
                                             className='btn btn-warning form-control'>
                                             &nbsp;&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </button>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </div>
               {shallowEqual(defSummery, initDefSummery) & hd > 0 ?
                    <div>
                         <button
                              name="A+"
                              className='btn btn-primary form-control'
                              onClick={e => btnTireGradeHandler(e)}>
                              A+
                         </button>
                    </div> :
                    <div> </div>}
               <div className='table-containter'>
                    <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">
                         <thead>
                              <tr>

                                   <th scope="col-5" className="text-primary">Defect</th>
                                   <th className="text-primary">Scale</th>

                              </tr>
                         </thead>
                         <tbody>
                              {/* TRead...................--------------------------------------------......... */}
                              <tr>

                                   <td>Thick Flash</td>
                                   <td>
                                        <select className="form-control"
                                             name="tf"
                                             value={tf}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">3mm</option>
                                             <option value="5">5mm</option>
                                             <option value="7">7mm</option>
                                             <option value="10">10mm</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Mold Mark</td>
                                   <td>
                                        <select className="form-control"
                                             name="mm"
                                             value={mm}
                                             onChange={e => handleInputChange(e)}

                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Back Grinding</td>
                                   <td>
                                        <select className="form-control"
                                             name="bg"
                                             value={bg}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Lug Damage</td>
                                   <td>
                                        <select className="form-control"
                                             name="ld"
                                             value={ld}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="3">-</option>
                                             <option value="5">1-3</option>
                                             <option value="7">4-6</option>
                                             <option value="10">7-10</option>
                                             <option value="100">10+</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Tr Flow Mark</td>
                                   <td>
                                        <select className="form-control"
                                             name="trfm"
                                             value={trfm}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Speu Particles</td>
                                   <td>
                                        <select className="form-control"
                                             name="speu"
                                             value={speu}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Miner</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>
                              <tr>
                                   <td>NM Dirty</td>
                                   <td>
                                        <select className="form-control"
                                             name="nmdirty"
                                             value={nmdirty}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>

                              {/* Base ---------------------------------------------------------------------------*/}
                              <tr>
                                   <td>Base Flow Mark</td>
                                   <td>
                                        <select className="form-control"
                                             name="bfm"
                                             value={bfm}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>

                              <tr>
                                   <td>Bead Out</td>
                                   <td>
                                        <select className="form-control"
                                             name="bo"
                                             value={bo}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>

                              {/* SW ------------------------------------------------------------------- */}
                              <tr>
                                   <td>Stensil No Displacement</td>
                                   <td>
                                        <select className="form-control"
                                             name="sndp"
                                             value={sndp}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Small</option>
                                             <option value="2">Medium</option>
                                             <option value="3">High</option>
                                        </select>
                                   </td>
                              </tr>


                              {/* Others------------------------------ */}
                              <tr>
                                   <td>Others</td>
                                   <td>
                                        <select className="form-control"
                                             name="other"
                                             value={other}
                                             onChange={e => handleInputChange(e)}
                                        >
                                             <option value="0">-</option>
                                             <option value="1">Forign Matters</option>
                                             <option value="2">Appure Dammage</option>
                                             <option value="3">No Type</option>
                                             <option value="4" >Peek</option>
                                             <option value='5'>Plate Dammage</option>
                                        </select>
                                   </td>
                              </tr>

                         </tbody>
                    </table>

               </div>





               {shallowEqual(defSummery, initDefSummery) ?
                    <></>
                    :
                    <>
                         {hd > 0 ?
                              <div>
                                   <div className="button-group">
                                        <div className='table-containter'>
                                             <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">

                                                  <tbody>
                                                       <tr>
                                                            <td> <button
                                                                 className='btn btn-primary form-control'
                                                                 name="A"
                                                                 onClick={e => btnTireGradeHandler(e)}>
                                                                 A
                                                                 </button>
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                   </div>
                                   <div className='table-containter'>
                                        <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">

                                             <tbody>
                                                  <tr>
                                                       <td> <button name="B"
                                                            onClick={e => btnTireGradeHandler(e)}
                                                            className='btn btn-success form-control'>B
                                                            </button>
                                                       </td>
                                                       <td> <button name="C"
                                                            onClick={e => btnTireGradeHandler(e)}
                                                            className='btn btn-warning form-control'>C
                                                            </button>
                                                       </td>
                                                       <td> <button name="E"
                                                            onClick={e => btnTireGradeHandler(e)}
                                                            className='btn btn-info form-control'>E
                                                            </button>
                                                       </td>
                                                       <td> <button name="R"
                                                            onClick={e => btnTireGradeHandler(e)}
                                                            className='btn btn-danger form-control'>R
                                                            </button>
                                                       </td>
                                                       <td> <button name="L"
                                                            onClick={e => btnTireGradeHandler(e)}
                                                            className='btn btn-secondary form-control'>L
                                                            </button>
                                                       </td>
                                                  </tr>

                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                              :
                              <></>
                         }
                    </>
               }








          </div>


     )
}

export default FtrComp
