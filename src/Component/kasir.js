import React, { Fragment } from "react";
import { useEffect, useState } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      pakaian: [
        ["Kemeja Kotak", 35000],
        ["Hoodie Bell", 45000],
        ["Kemeja Hitam Polos", 30000],
        ["Jacket", 40000],
        ["Dress Bunga", 45000],
        ["Kemeja Garis", 30000],
        ["Jacke Parka", 50000],
        ["Topi Polo", 35000],
        
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }
 

  render() {
    //const [user, setUser] = useState("");
    const {pakaian, totalTagihan } = this.state;
    return (
      <div style={{ backgroundColor: "#00FFFF", height: "850px"   }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="#FFFFFF" align ="center" direction ="left" scrollamount="10">PUSAT BAJU BEKAS BERKUALITAS, KELOMPOK 22, KHUSNUL DAN IBNU, hanya ada di KHUSNU.MART </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#808080", fontFamily:"Arial", fontWeight: "bold" }}>KHUSNU.MART</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Masukkan Nama Anda:</label>
            </center>
            <div>
              <center>
              <input style={{
                   background: "#0000FF",
                   color: "#FFFFFF",
                   margin: "auto",
                   height: "40px",
                   border: "#9254de",
                   fontSize: "15px"
                }}
                placeholder=" "
                size="50"
                /*value={user}
                onChange={(event) => setUser(event.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    if(user !== "") {
                      alert("Hallo " + user);
                    }
                  }
                }}*/
              />
              </center>
            </div>
            <center>
            <label >Masukkan Nama Barang:</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#0000FF",
                color: "#FFFFFF",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                placeholder=" "
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="MAKAN-MAKAN">
                <br />
                <center>
                <label >Pilih Barang:    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0"> </option>
                  <Fragment>
                    {pakaian.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                
                <br />
              </div>
              <h3
                style={{
                  color: "#808080",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"sans-serif",
                  fontStyle:"italic"
                }}
              >
                Total Harga {totalTagihan} 
              </h3>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Kasir;
