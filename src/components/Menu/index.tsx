import { Box, Divider, Link, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link as RouterLink } from "react-router-dom";


export function Menu() {
  
  return (
    <Box>
    	<MenuList component='nav' sx={{width: '180px'}}>
      	<Link
					underline='none'
					component={RouterLink}
					to='/items'
				>
        	<MenuItem
						sx={{ padding: '10px' }}
					>
          	<ListItemIcon>
            	<ReceiptIcon color='primary'/>
            	<ListItemText primary='Transações' sx={{marginLeft: '8px'}}/>
          	</ListItemIcon>
        	</MenuItem>
      	</Link>
      	<Divider/>
      	<Link
					underline='none'
					component={RouterLink}
					to='/dashboard'
				>
        	<MenuItem
							sx={{ padding: '10px' }}
					>
          	<ListItemIcon>
            	<DashboardIcon color='primary'/>
            	<ListItemText primary='Dashboard' sx={{marginLeft: '8px'}}/>
          	</ListItemIcon>
        	</MenuItem>
       </Link> 
			 <Divider />   
    	</MenuList> 
  	</Box>
    
  )
}