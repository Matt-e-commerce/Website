import theme from "../../Theme/Theme";
const style = {
    'Labelstyle':{
        fontWeight: '400',
         fontSize:{ md:'22px',sm:'20px',xs:'15px'},
          color: theme.primary
        
    },
    'Maincontainer':{
         marginTop:{lg:'50px',md:'0px',sm:'0px',xs:'0px'},
         paddingX:{md:'60px',sm:'30px',xs:'20px'}
        
    },

    'Labelstyle':{
        fontWeight: '400', 
        fontSize: '22px', 
        color: theme.blue,
        
    },
    'Mainbox':{
        backgroundColor:'white',

    minHeight: {lg:'70vh',md:'70vh',sm:'40vh',xs:'30vh'}, // Center vertically
        
    },
    'Maindiv':{
        backgroundColor:'white',


     
       minHeight: {lg:'70vh',md:'70vh',sm:'40vh',xs:'30vh'}, // Center vertically
               padding:'40px'
        
    },
    'myTextField' :{
  borderRadius:' 12px',
  fontWeight: '500',
  fontSize: '14px',
},

'myLabel': {
  fontSize:' 14px'
  /* Add other label text styles as needed */
}
, 
'cardstyle':{
    backgroundColor:'white',
            padding:'30px',
            boxShadow:'0px 0px 0px 0px',border: "1px solid #D5D5D5",
            marginX:{md:"0px",sm:"0px",xs:'10px'}
},
'Signupheading':{
    marginTop: { md: 2, sm: 5, xs: 5 },
                fontWeight: "600",
                lineHeight: { md: "71.12px", sm: "18px", xs: "15px" },
                fontSize: { md: "40px", sm: "30px", xs: "25px" },
},
'Registerbutton':{
    mt: 3,
                  mb: 2,
                  color: theme.white,
                  boxShadow: "0px 0px 0px 0px",
                  paddingX: "25px",
                  borderRadius:'13px',
                  fontSize: { md: "18px", sm: "15px", xs: "10px" },
},
'iconstyle':{
    color: "#6D6868", // Adjust the color as needed

                            marginRight: "8px", // Adjust the spacing as needed
}
   

    
}
export default style;