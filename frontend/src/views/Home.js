import { Typography } from '@mui/material'

const Sample = (props) => {

    return (
        <header>
            {/* Regular h1 component */}
            <h1>Regular Sample h1!</h1>


             {/* MUI h1 component */}
             <Typography variant='h2'> MUI Sample H2!</Typography>
        </header>
    )
}

export default Sample