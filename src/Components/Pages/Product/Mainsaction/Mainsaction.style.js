import theme from "../../../Theme/Theme";
const style={
    // Main Top Box
    'FilterSaction':{
      paddingRight:{md:'10px',sm:'0px',xs:'0px'},
      display:{lg:"block",md:"none",sm:"none",xs:"none"}

    },

    /* Main heading */
    'Mainheading':{
      fontSize: {md:'3.5rem',sm:'3.5rem',xs:'2rem'},
      fontWeight: '550',
      lineHeight: '55px',
      letterSpacing:' 0em',
      color: '#1D1D1D',
    },
   ' Mainparagraph':{
      fontSize:' 1rem',
      textAlign: 'justify',
       fontWeight: '400',
      lineHeight: '23px',
      letterSpacing:' 0em',
      color: '#1D1D1D',
          
    },
    'Mainbutton':{
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '21px',
      borderRadius: '50px',
      textAlign: 'center',
      backgroundColor:'#0F75BC',
      color: 'white',
      marginTop: '30px',
      paddingX:'40px',
      paddingY:'15px',
      marginBottom:{lg:"0",md:"10px",sm:"10px",xs:"10px"},
      '&:hover': {
        backgroundColor: '#0F75BC', // Set your desired hover background color
      },
      
    },
   
    'CategoryHeading':{
      fontWeight: "500", 
      fontSize: "17px", 
      color: "#3C3737"
    },
    'checkboxstyle':{
      "&.Mui-checked": {
        color: "#F7941D", // Change to your desired color
      },
     },
    'checkboxsubheading':{
      
      lineHeight: {
        md: "19.6px",
        sm: "12px",
        xs: "15px",
      },
      fontWeight: "400",
   
  },
    'card-1':{
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 0px 0px 0px",
      padding: "10px",
     
   },
   'card-2':{
    backgroundColor: "#D9D9D9",
    boxShadow: "0px 0px 0px 0px",
    padding: "10px",
   
 },
      'card-3':{
        backgroundColor: "#B3B3B3",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      
      },
      'card-4':{
        backgroundColor: "#666666",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      
      },
      'card-5':{
        backgroundColor: "red",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-6':{
        backgroundColor: "red",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-7':{
        backgroundColor: "red",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },

      'card-8':{
        backgroundColor: "red",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-9':{
        backgroundColor: "#EEFF26",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-10':{
        backgroundColor: "#26FF63",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-11':{
        backgroundColor: "#26FFD8",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'card-12':{
        backgroundColor: "#5126FF",
        boxShadow: "0px 0px 0px 0px",
        padding: "10px",
      },
      'fliterbutton':{
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0px 0px 0px 0px",
        marginBottom:"10px",
        fontSize: "13px", 
          '&:hover': {
          backgroundColor: '#0F75BC', // Set your desired hover background color
          boxShadow: "0px 0px 0px 0px",
         },
      },
      'Modalbutton':{
        marginTop: {md:"20px",sm:"20px",xs:'0px'},
        color: "white",
        padding: "10px",
        borderRadius: "50px",
        fontSize: "12px",
        boxShadow: "0px 0px 0px 0px",
        display:{lg:"none",md:"block",sm:"block",xs:"block"},
        marginLeft:"auto"
      }
 

}
export default style;