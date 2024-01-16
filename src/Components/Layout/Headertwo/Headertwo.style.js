const style = {
  Headertwomain: {
    backgroundColor: "#F7F7F7",
  },

  Headertwocontainer: {
    paddingTop:'20px',
    paddingX: { md: "90px", sm: "0px", xs: "5px" },
    paddingBottom:{md:'20px',sm:'20px',xs:'16px'}
  },
  Headertwopaper: {
    p: 0,
    backgroundColor: "#F7F7F7",
    borderRadius: 7,
    border: "2px solid #D9D9D9",
    display:{lg:'flex',md:'flex',sm:"flex",xs:'none'}
  },
  Categoryheading: {
    display: "inline-block",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7F7F7F",
    margin: "7px",
    fontSize: {md:"12px",sm:'11px',xs:'8px'},
  },
  IconButtonstyle: {
    color: "#fff",
    background: "#F7941D",
    paddingX: { md: "34px", sm: "25px", xs: "20px" },
    paddingY: { md: "16px", sm: "0px", xs: "0px" },
    borderRadius: { md: 7, sm: 10, xs: 20 },
    "&:hover": {
      background: "#F7941D",
    },
    "&:focus": {
      outline: 0,
      boxShadow: "none",
    },
  },
  scrollbarstyle: {
    maxHeight: "200px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#F7941D",
      borderRadius: "10px",
    },
  },
  
};
export default style;
