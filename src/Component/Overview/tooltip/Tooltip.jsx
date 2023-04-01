import React, { useState } from 'react'
import './tooltip.css'
import Modal from 'react-modal'

// import { MdOutlineMapsHomeWork } from 'react-icons/md'
// import { TbBuildingPavilion } from 'react-icons/tb'
// import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
// import { RiDeleteBinLine } from 'react-icons/ri'
// import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { RiBuilding2Line } from 'react-icons/ri'
import DemoScatter from '../../AntComponents/GraphDashboard'

Modal.setAppElement('#root')

const Tooltip = ({ text, number, left, top, fill, iconName }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="tooltip" onClick={() => setModalIsOpen(true)} style={{ left: `${left}%`, top: `${top}%` }}>

                <div className='tooltip__icon' style={{ background: `${fill}` }} >
                    <RiBuilding2Line className='icons'/>
                </div>
                <div className='tooltip__detail'>
                    <div className='tooltip__detail-heading'>{text}</div>
                    <div className='tooltip__detail-number'>{number}</div>
                </div>

            </div>
            




            {/* =============Modal implementation starts================ */}
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            width: "50%",
            height: "60%",
            position: "absolute",
            top: "18%",
            left: "24%",
            borderRadius: "20px",
            boxShadow:
              "0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)",
          },
        }}
      >
        {" "}
        <div
          style={{
            fontWeight: "600",
            fontFamily: "Roboto,sansSerif",
            display: "flex",
          }}
        >
          Sales figure
          <div
            style={{ display: "flex", marginLeft: "40%", fontWeight: "600" }}
          >
            <spna>Sales</spna>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <spna>User</spna>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <spna>Product</spna>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <spna>Team</spna>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>
        <div style={{ width: "96%", height: "90%", marginTop: "10px" }}>
          <DemoScatter />
        </div>
      </Modal>
            {/* =============Modal implementation ends================ */}
        </>
    )
}

export default Tooltip;