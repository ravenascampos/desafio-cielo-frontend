import { Box, Divider, Link, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link as RouterLink } from "react-router-dom";


export default function Menu() {
  
  return (
    <Box>
    	<MenuList component='nav'>
      	<Link
					component={RouterLink}
					to='/transactions'
				>
        	<MenuItem>
          	<ListItemIcon>
            	<ReceiptIcon/>
            	<ListItemText primary='Transações'/>
          	</ListItemIcon>
        	</MenuItem>
      	</Link>
      	<Divider />
      	<Link
					component={RouterLink}
					to='/dashboard'
				>
        	<MenuItem>
          	<ListItemIcon>
            	<DashboardIcon/>
            	<ListItemText primary='Dashboard'/>
          	</ListItemIcon>
        	</MenuItem>
       </Link> 
			 <Divider />   
    	</MenuList> 
  	</Box>
    
  )
}