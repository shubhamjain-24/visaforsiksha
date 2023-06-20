import "./payment.css"
import qrcode from "../../Images/qrcode.png"
import locked from "../../Images/locked.png"

function Payment() {
    return(
        <>
            <div className="payment1_grid-container">
                <div className="payment1_left-box">
                    <img src= {qrcode} alt="qrcode" width={"90%"}/>
                    <h1 className="payment1_amount"> Rs. 5000</h1>
                    <h1>Scan the QR code to pay the amount</h1>
                </div>
                <div className="payment1_right-box">
                    <h2 className="payment1_right-heading">To avail your work ,pay now!</h2>
                    <img src = {locked} alt="locked" width={"60%"} />
                </div>
            </div>
        </>
    );
}

export default Payment;