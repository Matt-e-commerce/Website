import theme from "../Theme/Theme";
const style = {
    'Tabcard':{
        background:'white' ,
        textAlign: "center",
          boxShadow:'0px 0px 0px 0px',
          border:'2px solid #D9D9D9',
          borderRadius:'18px',
          
         },
    'Tabsheading':{
        color: '#000000',
        fontWeight: "400",
        lineHeight: { md: "22px", sm: "18px", xs: "15px" },
        fontSize: { md: "15px", sm: "12px", xs: "10px" },
    },    
    'Subheading':{
        color:  '#000000',
             fontWeight: "400",
             lineHeight: { md: "24px", sm: "10px", xs: "8px" },
             fontSize: { md: "16px", sm: "10px", xs: "8px" },
    },
    'Tabbutton':{
        color: 'white',
         boxShadow: "0px 0px 0px 0px",
        paddingX: "25px",
            fontSize: "12px",
             textTransform: "lowercase",
             marginTop: "10px",
             background:'#F7941D',
             "&.MuiButtonBase-root:hover": {
              background: "#F7941D",
             boxShadow: "0px 0px 0px 0px",
                 color: "#FFFFFFE5",
                        },
    },
    'Tabcontainer':{
        display:"flex",
        alignItems:"center" ,
        justifyContent:"center"
    },
    'producttile':{
        color: '#1D1E1E', fontWeight: 'bold' 
    },
    'productprice':{
        display: 'flex', justifyContent: 'flex-end' 
    },
    'productdecription':{
        textAlign: 'center', 
        fontSize: '12px', 
        color: '#7F7F7F', 
        padding: '8px' 
    }

    
}
export default style;