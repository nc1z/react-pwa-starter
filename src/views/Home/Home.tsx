import {Box, Typography} from '@mui/material'
import mockData from '../../mock/mock-data.json'

const Home = () => {
    return (
        <Box className="PageContainer">
            {mockData.map((item) => (
                <Box key={item.title} className="ArrayContainer">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Home
