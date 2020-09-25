import React from 'react'
import styles from '../../css/FtrComp.module.css'
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
     return (
          <div className='fi-container'>
               <div className='tire-detail'>
                    <ul tire-detail-ul>
                         <li>{tiresizebasic} {lugtype} {config}</li>
                         <li>{rimsize}</li>
                         <li>{tiretypecap}</li>
                         <li>{brand} / {swmsg}</li>
                         <li>{moldno}</li>
                    </ul>
               </div>
               <div className="ftr-inputs">
                    <ul>
                         <li>
                              Lug Damage: <select>
                                   <option value={1}>1 Lugs</option>
                                   <option value={2}>2 Lugs</option>
                                   <option value={3}>3 Lugs</option>
                                   <option value={4}>4 Lugs</option>
                                   <option value={5}>5 Lugs</option>
                                   <option value={6}>6 Lugs</option>
                                   <option value={7}>7 Lugs</option>
                                   <option value={8}>8 Lugs</option>
                                   <option value={9}>9 Lugs</option>
                                   <option value={10}>10 Lugs</option>
                                   <option value={100}>10+ Lugs</option>
                              </select>
                         </li>
                         <li>
                              Bead Out: <select>
                                   <option value={1}>1   Wires</option>
                                   <option value={2}>2   Wires</option>
                                   <option value={3}>3   Wires</option>
                                   <option value={4}>4   Wires</option>
                                   <option value={5}>5   Wires</option>
                                   <option value={6}>6   Wires</option>
                                   <option value={7}>7   Wires</option>
                                   <option value={8}>8   Wires</option>
                                   <option value={9}>9   Wires</option>
                                   <option value={10}>10   Wires</option>
                                   <option value={100}>10+   Wires</option>
                              </select>
                         </li>
                         <li>
                              Flow Mark: <select>
                                   <option value={1}>Small</option>
                                   <option value={2}>Medium</option>
                                   <option value={3}>Large</option>
                                   <option value={4}>Massive</option>
                              </select>
                         </li>
                    </ul>
               </div>

          </div>
     )
}

export default FtrComp
