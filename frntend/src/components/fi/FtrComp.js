import React from 'react'
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
     return (
          <div className='fi-container'>
               <div class="row">
                    <div className='tire-detail'>
                         {tiresizebasic} {lugtype} {config} {rimsize} {tiretypecap}
                         <br />
                         {brand} / {swmsg}
                         <br />
                              MoldNo:-{moldno}
                    </div>
               </div>
               <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">
                    <thead>
                         <tr>
                              <th scope="col-5" className="text-primary">Defect</th>
                              <th className="text-primary">Scale</th>

                         </tr>
                    </thead>
                    <tbody>
                         {/* {
                            tireDetails && tireDetails.map(el => (
                                <tr onClick={() => handleSelectRow(el.sn, el.specid)} key={el.sn} >
                                    <td className="text-primary">{el.sn}</td>
                                    <td >{el.tiresizebasic}   {el.lugtype} {el.config} {el.rimsize}</td>
                                    <td> {el.tiretypecap}</td>
                                    <td>{el.brand}/{el.swmsg}</td>
                                    <td>{el.pid}</td>
                                    <td>{el.moldno}</td>
                                </tr>
                            ))} */}
                    </tbody>
               </table>

          </div>


     )
}

export default FtrComp
