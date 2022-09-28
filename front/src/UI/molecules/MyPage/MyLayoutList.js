import { Grid } from '@mui/material';
import MyLayoutAtoms from '../../atoms/MyPage/MyLayoutAtoms';

const datas = {
    "success" : true,
    "data" : {
        "layouts" : [
            {
                "id" : "layoutId",
                "name" : "name1"
            }, {
                "id" : "layoutId",
                "name" : "name2"
            }, {
                "id" : "layoutId",
                "name" : "name3"
            }
        ]
    }
};

const MyLayoutList = (props) => {
    const myLayoutList = props.myLayoutList;
    
    return (
        <>
            <Grid container spacing={3}>
                {myLayoutList.data.map((data, i) => (
                    <Grid
                        item
                        xl={4}
                        lg={6}
                        sm={6}
                        id={data.id}
                        key={i}
                    >
                        <MyLayoutAtoms data={data}></MyLayoutAtoms>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default MyLayoutList