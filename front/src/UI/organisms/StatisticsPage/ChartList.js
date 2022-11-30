import Box from '@mui/material/Box';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

export default function ChartList(props) {
  ChartJS.register(...registerables);

  const datas = props.data.data;
  console.log(datas);
  const dataBar = {
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    datasets: [
      {
        label: '월별 조회수',
        backgroundColor: 'rgba(186,219,243,0.6)',
        borderColor: 'rgba(186,219,243,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(186,219,243,1)',
        hoverBorderColor: 'rgba(186,219,243,1)',
        data: [
          datas.januaryViews,
          datas.februaryViews,
          datas.marchViews,
          datas.aprilViews,
          datas.mayViews,
          datas.juneViews,
          datas.julyViews,
          datas.augustViews,
          datas.septemberViews,
          datas.octoberViews,
          datas.novemberViews,
          datas.decemberViews,
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        width: '90%',
        marginLeft: '5%',
        border: 2,
        marginTop: 1,
        display: 'inline-block',
      }}
      style={{ fontFamily: "SUIT-Regular" }}
    >
      <Bar data={dataBar} width={100} height={50} />
    </Box>
  );
}
