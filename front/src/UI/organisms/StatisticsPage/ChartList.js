import Box from '@mui/material/Box';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

export default function ChartList(props) {
  ChartJS.register(...registerables);
  const text = props.text;
  const datas = props.data[0].data[0];
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
          datas.januaryView,
          datas.februaryView,
          datas.marchView,
          datas.aprilView,
          datas.mayView,
          datas.juneView,
          datas.julyView,
          datas.augustView,
          datas.septemberView,
          datas.octoberView,
          datas.novemberView,
          datas.decemberView,
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
    >
      <Bar data={dataBar} width={100} height={50} />
    </Box>
  );
}
