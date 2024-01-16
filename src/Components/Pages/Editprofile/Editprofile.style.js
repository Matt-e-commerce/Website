import theme from "../../Theme/Theme";
const style = {
     'Pr0filesaction':{
        border: (theme) => `1px solid ${theme.palette.divider}`,
            bgcolor: "white",
            color: "#110229",
            borderRadius: "15px",
            marginTop: "20px",
            padding: { md: "9px", sm: "10px", xs: "10px" },
           marginX: { lg:"0px",md: "48px", sm: "30px", xs: "20px" },

              
     },
     'Profileheading':{
        color: "black",
        fontWeight: "600",
        fontSize: { md: "28px", sm: "20px", xs: "20px" },
        padding: { md: "0px", sm: "8px", xs: "10px" }

     },
     'Securityparagraph':{
        lineHeight: { md: "31.12px", sm: "22px", xs: "15px" },
        fontSize: { md: "14px", sm: "18px", xs: "12px" },
        paddingX: { md: "45px", sm: "10px", xs: "5px" },
     },
  
      
    'Cardbox':{
        color: "#0a202d",
        backgroundColor: "#FDDFBB",
        textAlign: "center",
        boxShadow: "0px 0px 0px 0px",
    },

    'Recovecodeheading':{
        paddingLeft: "30px",

                        fontWeight: "400",
                        lineHeight: { md: "19.12px", sm: "12px", xs: "10px" },
                        fontSize: { md: "14px", sm: "18px", xs: "10px" },
                        textAlign: "center",
    },
      'Saveprofilebutton':{
        mt: 3,
        mb: 2,
        color: "#FFFFFFE5",
        boxShadow: "0px 0px 0px 0px",
        padding: "15px",
        fontSize: "15px",
        textTransform: "lowercase",
        fontWeight: "700",
        borderRadius:'10px',
        marginLeft: { md: "5px", sm: "0px", xs: "0px" },
        marginX:{md:'0',sm:'0px',xs:'10pxx'}
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
      'Iconstyle':{
     marginRight: "8px", // Adjust the spacing as needed
     color:"#6D6868"   
       }

   

    
}
export default style;