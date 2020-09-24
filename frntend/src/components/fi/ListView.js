import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../../apis/SLTLDBConnection'
import { useHistory, useParams } from 'react-router-dom'


const ListView = () => {

    const [tireDetails, setTireDeatails] = useState([])
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
    const [val, setVal] = useState('')

    let history = useHistory()

    //SN onChange Handler
    const snHndler = (e) => {
        setVal(e.target.value)
    }
    //SN onKey Handler
    const snKeyHandler = (e) => {
         symbolsArr.includes(e.key) && e.preventDefault()
    }

    //getFilterdSn List
    const fetchDataSN = async () => {
        try {
            // const response = await SLTLDBConnection.get(`/get_tiredetails_of_given_noof_dates_back_frm_mfg_tbl/1/${val}`)
            const response = await SLTLDBConnection.get(`/get_tiredetails_filterd_sntext/${val}`)
            console.log(response.data.data);
            setTireDeatails(response.data.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    //Get last day produciton
    const fetchDataLastDay = async () => {
        try {
            const response = await SLTLDBConnection.get(`/get_tiredetails_of_given_noof_dates_back_frm_mfg_tbl/100`)
            setTireDeatails(response.data.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        //if input is empty call initial Fetching. Otherwise call sn Filtering fetching
        if (val == "") {
            fetchDataLastDay()
        } else {
            fetchDataSN()
        }

    }, [val])

    //Handlers----------------------------
    //Click row then go to edit-spec-page
    const handleSelectRow = (sn, specid) => {
        // fetchTireDetails(sn)
        history.push(`/editspec/:${sn}/:${specid}`)
    }
    //-------------------------------------



    return (
        <>
            <div className="">
                <table className="table-responsive{-sm-md|-lg|-xl} table mt-2 text-left table-hover table-sm">
                    <thead>
                        <tr>
                            <th >
                                <label className="text-primary" htmlFor="sn">SN</label>

                                <input className="form-control input-sm w-70"
                                    id="sn"
                                    type="number"
                                    value={val}
                                    onChange={(e) => snHndler(e)}
                                    onKeyDown={e=>snKeyHandler(e)}
                                />
                            </th>

                            <th className="text-primary">TireSize</th>
                            <th className="text-primary">Type</th>
                            <th className="text-primary">Rim</th>
                            <th className="text-primary">Brand/SWMsg</th>
                            <th className="text-primary">PID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tireDetails && tireDetails.map(el => (
                                <tr onClick={() => handleSelectRow(el.sn, el.specid)} key={el.sn} >
                                    <td className="text-primary">{el.sn}</td>
                                    <td >{el.tiresizebasic}   {el.lugtype} {el.config} {el.rimsize}</td>
                                    <td> {el.tiretypecap}</td>
                                    <td>{el.brand}/{el.swmsg}</td>
                                    <td>{el.pid}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}




export default ListView
