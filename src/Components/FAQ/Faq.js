import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Grid ,Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import RemoveIcon from '@mui/icons-material/Remove';

const Faq = () => {
  const [expanded, setExpanded] = useState([true, false, false]); // Initialize to true for each Accordion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[panel] = isExpanded;
      return newExpanded;
    });
  };
  const accordionStyle = {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: "4px",
    boxShadow: "none", // Remove box shadow
    border: "none", // Remove border
    position: "relative",
    overflowAnchor: "none",
    marginBottom:"20px"
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Typography variant="h3"  sx={{textAlign:'center',fontWeight:'bolder'}}>  FAQ'S  </Typography>
          <Typography variant="subtitle1" sx={{textAlign:'center',fontSize: {md:'19px',sm:"15px",xs:"15px"},
                  width:{md:"80%",sm:"70%",xs:"90%"},
                  margin:"auto"

}}>
           You offer a good product, make advertising, analyze the market but
            still have no improvement Our qulificated specialists
          </Typography>
        </Grid>
      </Grid>
       <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" ,paddingX:{lg:'0',md:'40px',sm:'40px',xs:'20px'}}} >
         <Grid item lg={8} md={12} sm={12} xs={12}>
         <div>
            {[{
               label: " 01 | How we work at our brand?",
            
                 content: (
                    <div>
                      <Typography sx={{fontSize:'20px',fontWeight:'400', width:{md:"80%",sm:"70%",xs:"90%"}}}>
                      You offer a good product, make advertising, analyze the market
                      but still have no improvement Our qulificated specialists
                   </Typography>
                  </div>
                  ),
                },
                {
                  label: " 02 | How we work at our brand?",
               
                    content: (
                       <div>
                         <Typography sx={{fontSize:'20px',fontWeight:'400' , width:{md:"80%",sm:"70%",xs:"90%"}}}>
                         You offer a good product, make advertising, analyze the market
                         but still have no improvement Our qulificated specialists
                      </Typography>
                     </div>
                     ),
                   },
                   {
                    label: " 03 | How we work at our brand?",
                 
                      content: (
                         <div>
                           <Typography sx={{fontSize:'20px',fontWeight:'400',width:{md:"80%",sm:"70%",xs:"90%"}}}>
                           You offer a good product, make advertising, analyze the market
                           but still have no improvement Our qulificated specialists
                        </Typography>
                       </div>
                       ),
                     },
                 ].map((section, index) => (
                <Accordion
                  key={index}
                  expanded={expanded[index] || false}
                  onChange={handleAccordionChange(index)}
                  style={accordionStyle}>
                <AccordionSummary sx={{backgroundColor: '#FAFAFA',boxShadow:"0px 0px 0px 0px"}}
              expandIcon={
              expanded[index] ? (
                <RemoveIcon sx={{ color: 'white', backgroundColor: '#F7941D' }} />
              ) : (
                <AddIcon sx={{ color: 'white', backgroundColor: '#F7941D' }}/>)}>
                 <Typography  variant="h6" sx={{fontWeight:'600',color:'#484444'}}>{section.label}</Typography>
                      </AccordionSummary>
                  <AccordionDetails  sx={{fontWeight:'400',backgroundColor:'#FAFAFA',color:'#484444'}}>{section.content}</AccordionDetails>
                </Accordion>
              ))}
            </div>
 
      </Grid>
        </Grid>
     
    </div>
  );
};

export default Faq;
