import './paymentDone.css'
import qrcode from "../../Images/qrcode.png"
import unlocked from "../../Images/unlocked.png"

function PaymentDone() {
    return(
        <>
            <div className="grid-container-pd">
                <div className="left-box-pd">
                    <img src= {qrcode} alt="qrcode" width={"90%"}/>
                    <h1 className='PD_text1'>Amount Paid</h1>
                    <h1 className="amount-pd"> Rs. 5000</h1>
                </div>
                <div className="right-box-pd">
                    <h2 className="right-heading-pd">Here is your work!!!</h2>
                    <img src = {unlocked} alt="locked" width={"70%"} />
                    <button className="download-btn">Download</button>
                </div>
            </div>
        </>
    );
}

export default PaymentDone;