import React, { useState, useEffect, useContext, createContext } from "react";
//import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const DeskripsiPakaian = createContext();
function Pakaian(props){
	const [pakaian, setPakaian] = useState([]);
    const [detail, setDetail] = useState([]);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8000/data",
            headers: {
                accept: "*/*",
            },
        })
        
        .then((data) => {
            setPakaian(data.data);
        })
        
        .catch((error) => {
            console.log(error);
        })
    }, [])


// export default class pakaian extends Component {
//     constructor(props) {
// 		super(props);
// 		this.state = {
// 			recipe: [],
// 			visible: false,
// 		};
// 	}

// 	handleButton = (steps) => {
// 		alert("REVIEW : " + steps);
// 	};
	
// 	componentDidMount() {
// 		axios({
// 			method: "get",
// 			url: "http://localhost:8000/data",
// 			headers: {
// 				accept: "*/*",
// 			},
// 		})
// 		.then((data) => {
// 			console.log(data.data);
// 			this.setState({
// 				recipe: data.data,
// 			});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// 	}
	
// 	render() {
		return (
			<div style={{ backgroundColor: "#00FFFF" }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="#FFFFFF" align ="center" direction ="left" scrollamount="10"> PUSAT BAJU BEKAS BERKUALITAS, KELOMPOK 22, KHUSNUL DAN IBNU, hanya ada di KHUSNU.MART </marquee>
        <div style={{ marginTop: 20 }}>
      <center>
      
  
            </center>
        <div className="marquee" >
            <center>
              <h2> HARGA BEKAS, KUALITAS PAS</h2>
              
        </center>
        </div>
				<Grid container
                    md={11}
                    spacing={4}
                    style={{ margin:"auto", backgroundColor: "#00FFFF" }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="strech"
					
                >
					{/* {this.state.recipe.map((results, index) => { */}

					{pakaian.map((results) => {
						return (
							<><Grid item key={results.name} md={3}>
								<Card>
									<CardActionArea onClick={() => { setOpen(true); setDetail([results.name, results.ingredients, results.steps]); } }>
										<CardContent style={{ backgroundColor: "#2F4F4F", textAlign: "center", color: "#ededed" }}>
											<CardMedia
												style={{
													height: "150px",
													margin: "auto",
													paddingTop: "5%",
													// margin: "1px",
													// padding: "auto",
													borderRadius: "8px",
													// height: "80px",
													// width: "80px"
												}}
												component="img"
												image={results.image} />

											<Typography style={{ fontWeight: "bold" }}>
												<br />{results.name}
											</Typography>
											<Typography>
												Harga: {results.ingredients}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
									<Box sx={style}>
										<Typography id="modal-modal-title" variant="h6" component="h2">
											{detail[0]}

										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											{detail[1]}
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											{detail[2]}
										</Typography>
									</Box>
								</Modal></>
						);
					})}
						
					
				</Grid>                
                <br/><br/><br/><br/>
			</div>
      </div>
            
		);
	
}
export default Pakaian;