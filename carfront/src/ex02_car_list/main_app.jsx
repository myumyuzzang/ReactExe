
import {AppBar, Toolbar, Typography} from '@mui/material';

function MainApp(){
    return(
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        Carshop
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default MainApp;