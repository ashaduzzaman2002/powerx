import './rechargehistory.css';
import { emptyBox, upi } from '../../assets';
import { Header } from '../../components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dbObject } from '../../helper/constant';

const RechargeHistory = () => {
  const location = useLocation()
  const [activeBtn, setActiveBtn] = useState("fast-parity");
  const [powerx, setPowerx] = useState([])
  const [duskadum, setDuskadum] = useState([])


  const getPowerx = async () => {
    try {
      const {data} = await dbObject('/power-x/recharge-history.php')
      console.log(data)
      if(!data.error) {
        setPowerx(data.response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getDusKadum = async () => {
    try {
      const {data} = await dbObject('/dus-ka-dum/recharge-history.php')
      console.log(data)
      if(!data.error) {
        setDuskadum(data.response)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
   getPowerx() 
   getDusKadum()
  }, [])
  

  return (
    <div className="container">
      <Header title={"Recharge History"} path={location?.state?.from || "/profile"} />
      <div className="gameHistory-btn-group mt-2">
        <button
          onClick={() => {
            setActiveBtn("fast-parity");
          }}
          className={`${
            activeBtn === "fast-parity" ? "gameHistory-activeBtn" : ""
          }`}
        >
          Power-X
        </button>
        <button
          onClick={() => {
            setActiveBtn("full-parity");
          }}
          className={`${
            activeBtn === "full-parity" ? "gameHistory-activeBtn" : ""
          }`}
        >
          Dus Ka Dum
        </button>
      </div>


      {activeBtn === "fast-parity" &&
        (powerx.length ? (
          <div className="recharge-history-card-group">
           {
            powerx.map((item, i) => (
              <div key={i} className="withdrawalRecords__container">
              <div className="withdrawalRecords__container__box">
                <div className="withdrawalRecords__container__box__top">
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{ flexBasis: "32%", width: "100%" }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Amount
                    </div>
                    <div
                      className="withdrawalRecords__container__box__top__bottom"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      ₹{item.points}
                    </div>
                  </div>
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{ flexBasis: "34%", width: "100%" }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Time
                    </div>
                    <div className="withdrawalRecords__container__box__top__bottom">
                      {/* 01/25 16:24 */}
                      {item.date}
                    </div>
                  </div>
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{
                      flexBasis: "34%",
                      width: "100%",
                      textAlign: "right",
                    }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Status
                    </div>
                    <div className="withdrawalRecords__container__box__top__bottom">
                      {item.status}
                    </div>
                  </div>
                </div>
                <div className="withdrawalRecords__container__box__bottom">
                  
                  <div
                    className="withdrawalRecords__container__box__bottom__top"
                    style={{ marginTop: 12 }}
                  >
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                      Bonus:
                    </div>
                    <div style={{textTransform: 'capitalize'}} className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.bonus}
                    </div>
                  </div>

                  <div className="withdrawalRecords__container__box__bottom__top">
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    Deposit Amount:
                    </div>
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.depositPoints}
                    </div>
                  </div>
                  <div className="withdrawalRecords__container__box__bottom__top">
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    Referral Fees:
                    </div>
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.referralFees}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
           }

         
        </div>
        ) : (
          <div className="emptyImage">
            <img src={emptyBox} alt="" />
          </div>
        ))}

      {activeBtn === "full-parity" &&
        (duskadum.length ? (
          <div className="recharge-history-card-group">
           {
            duskadum.map((item, i) => (
              <div key={i} className="withdrawalRecords__container">
              <div className="withdrawalRecords__container__box">
                <div className="withdrawalRecords__container__box__top">
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{ flexBasis: "32%", width: "100%" }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Amount
                    </div>
                    <div
                      className="withdrawalRecords__container__box__top__bottom"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      ₹{item.points}
                    </div>
                  </div>
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{ flexBasis: "34%", width: "100%" }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Time
                    </div>
                    <div className="withdrawalRecords__container__box__top__bottom">
                      {/* 01/25 16:24 */}
                      {item.date}
                    </div>
                  </div>
                  <div
                    className="withdrawalRecords__container__box__top__col"
                    style={{
                      flexBasis: "34%",
                      width: "100%",
                      textAlign: "right",
                    }}
                  >
                    <div className="withdrawalRecords__container__box__top__top">
                      Status
                    </div>
                    <div className="withdrawalRecords__container__box__top__bottom">
                      {item.status}
                    </div>
                  </div>
                </div>
                <div className="withdrawalRecords__container__box__bottom">
                  
                  <div
                    className="withdrawalRecords__container__box__bottom__top"
                    style={{ marginTop: 12 }}
                  >
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                      Bonus:
                    </div>
                    <div style={{textTransform: 'capitalize'}} className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.bonus}
                    </div>
                  </div>

                  <div className="withdrawalRecords__container__box__bottom__top">
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    Deposit Amount:
                    </div>
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.depositPoints}
                    </div>
                  </div>
                  <div className="withdrawalRecords__container__box__bottom__top">
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    Referral Fees:
                    </div>
                    <div className="withdrawalRecords__container__box__bottom__top__col">
                    ₹{item.referralFees}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
           }
         
        </div>
        ) : (
          <div className="emptyImage">
            <img src={emptyBox} alt="" />
          </div>
        ))}
      

         
       
      </div>
 
  );
};

const Card = ({ orderId, amount, date }) => (
  <div className="recharge-history-card">
    <div className="top">
      <div>
        <p className='mb-0'>{orderId}</p>
      </div>

      <img src={upi} alt="" />
    </div>

    <div className="bottom">
      <div className='amount'>
        <p className='mb-0'>{Number(amount).toFixed(2)}</p>points
      </div>
      <p className='mb-0' style={{color: '#dbdbdb'}}>{date}</p>
    </div>
  </div>
);

export default RechargeHistory;
