const style={
    // Main Top Box

     'allCategoriesButton': {
     borderRadius: '20px 20px 0px 0px',
      marginTop: '-10px',
      padding: '20px',
      display: { xs: "none", sm: "block" },
      display:'flex',
      fontSize:{md:'13px',sm:'15px',xs:'10px'}
    },
    
    'icon': {
      marginRight:' 5px',
      marginLeft: '15px',
    },
    'nav':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      },
    'navItem':{
     fontWeight: "500",
      fontSize: { lg: "13px" ,md: "12px", sm: "12px", xs: "10px" },
      color: "white",
      paddingRight: '30px',
      borderRight: '1px solid white',
      marginRight: '13px'
     },
     'Contactusitem':{
      fontWeight: "500",
       fontSize: {  lg: "13px" ,md: "12px",sm: "12px", xs: "10px" },
       color: "white",
      },
 'QuoteButton':{
      border: 'none',
      padding: '10px',
      borderRadius: '40px',
      position: 'absolute',
      top: '4px',
      right:'83px',
      borderRadius: '40px',
      cursor: 'pointer',
      paddingX: { md: "30px", sm: "15px", xs: "10px" },
    
    },
    'Tabmain':{
      flex: 1,
      marginRight: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "white",
    
    },
    'Rightcard':{
      flex: 4,
      borderRadius: "5px",
      backgroundColor: "white",
      padding: "20px",

    
    }
    ,
    'Tabicon':{
      color: "#7F7F7F"
    
    },
    'Tabheading':{
      color: "black",
      fontWeight: "600",
      lineHeight: {
        md: "25.5px",
        sm: "18px",
        xs: "15px",
      },
      fontSize: {
        md: "18px",
        sm: "12px",
        xs: "10px",
      },
    
    },
      'Tabsublistitem':{
      color: "#484444"
    }
    ,
    'Leftcard':{
      flex: 1,
      marginRight: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "white",
    },
    'linkstyle':{
      textDecoration: "none", // Remove underline
      color: "inherit", // Inherit color from parent (card)
      display: "block", // Make the link a block element
    },
    'Carticonbuttonstyle':{
      backgroundColor: "#0F75BC",
      borderRadius: "22px",
      padding: "10px",
      position: "absolute",
      top: "4px",
      right: "20px",
      "&:hover": {
        backgroundColor: "#0F75BC",
      },
     },
    'Appbarstyle':{
      backgroundColor: "#F7941D",
      boxShadow: "0px 0px 0px 0px",
      paddingX: {md:"75px",sm:'70px',xs:'30px'},
    },
  'Contactheading':{
    color: "black",
    fontWeight: "600",
    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
    fontSize: { md: "18px", sm: "12px", xs: "10px" },
  }


}
export default style;