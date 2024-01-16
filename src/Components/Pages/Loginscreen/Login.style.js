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
},
'Logincardstyle':{
    backgroundColor:'white',padding:'20px',boxShadow:'0px 0px 0px 0px',border: "1px solid #D5D5D5",
}
,
'loginheading':{
    fontWeight: "600",
    lineHeight: { md: "71.12px", sm: "18px", xs: "15px" },
    fontSize: { md: "50px", sm: "30px", xs: "25px" },
},
'loginlink':{
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit color from parent (card)
    display: "block", // Make the link a block element
},
'loginbutton':{
    boxShadow: "0px 0px 0px 0px",
    borderRadius:'12px',
    paddingX: "25px",
    paddingY: { md: "10px", sm: "8px", xs: "5px" },
    fontSize: { md: "18px", sm: "15px", xs: "15px" },
    color:'white'
}

   

    
}
export default style;