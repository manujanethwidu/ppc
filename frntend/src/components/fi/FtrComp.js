import React, { useState } from 'react'
import '../../css/FtrComp.css'

const FtrComp = ({ tireDetails }) => {
     const { tiresizebasic,
          lugtype,
          config,
          rimsize,
          tiretypecap,
          brand,
          swmsg,
          moldno

     } = tireDetails

     const [defSummery, setDefSummery] = useState({
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
          nmdirty: 0
     })
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
                    switch (defSummery.other) {
                         case "asdf":
                                   
                              break
                    }
                    break
          }
     }

     const clickHandler = () => {
          console.log(defSummery);
     }
     return (
          <div className='fi-container'>
               <div class="row">
                    <div className='tire-detail'>
                         {tiresizebasic} {lugtype} {config} {rimsize} {tiretypecap} {brand} / {swmsg}
                         <br />
                              MoldNo:-{moldno}
                    </div>
               </div>
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
                                             <option value="for_mat">Forign Matters</option>
                                             <option value="app_dam">Appure Dammage</option>
                                             <option value="no_type">No Type</option>
                                             <option value="peek" >Peek</option>
                                             <option value='plate dammage'>Plate Dammage</option>
                                             
                                        </select>
                                   </td>
                              </tr>
                         </tbody>
                    </table>

               </div>
             <button className='btn btn-primary' onClick={clickHandler}>Ener</button>
          </div>


     )
}

export default FtrComp
