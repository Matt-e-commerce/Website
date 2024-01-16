import theme from '../Theme/Theme'

const style = {
    'Footerparagraph':{
        color: "#7F7F7F",
        fontWeight: "400",
        lineHeight: { md: "21.59px", sm: "18px", xs: "15px" },
        fontSize: { md: "17px", sm: "12px", xs: "10px" },
        padding:{md:"0px",sm:"0px",xs:'10px'},
        width:{lg:'60%',md:"70%",sm:"60%"},
        margin:{lg:"auto",md:"auto",sm:"auto",xs:"0"}
 
 },
 'Expertheading':{
    color: "black",
     fontWeight: "600",
    lineHeight: { md: "50.5px", sm: "18px", xs: "23px" },
    fontSize: { md: "22px", sm: "20px", xs: "22px" },
 },
 'Expertsubheading':{
    color: "black",
    fontWeight: "400",
    fontSize: { md: "12px", sm: "18px", xs: "15px" },
 },
 'paperstyle':{
    p: 0,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 7,
                  boxShadow:'0px 0px 0px 0px',
                  border:'2px solid #D9D9D9',

 },
 'subscribebutton':{
    color: "#fff",
    background: "#F7941D",
    paddingX:{ md:"34px",sm:'34px',xs:'20px'},
    paddingY: "16px",
    borderRadius: {md:7,sm:10,xs:20},
    "&:hover": {
      background: "#F7941D",
    },
    "&:focus": {
      outline: 0,
      boxShadow: "none",
    },
 },
 'Socialheading':{
    color: "black",
    fontWeight: "600",
    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
    fontSize: { md: "25px", sm: "24px", xs: "18px" },
    color: "#F7941D",
    paddingBottom:'10px',
    
 },



    
}
export default style;
