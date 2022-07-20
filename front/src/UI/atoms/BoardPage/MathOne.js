import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const MathOne = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TeX math="x = \frac{ -b \pm \sqrt{ b^2-4ac } }{ 2a }" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="A = \pi r^2" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="\sin\alpha \pm \sin\beta = 2\sin\frac{1}{2}(\alpha \pm \beta) \cos\frac{1}{2}(\alpha \mp \beta)" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="\cos\alpha + \cos\beta = 2\cos\frac{1}{2}(\alpha + \beta) \cos\frac{1}{2}(\alpha - \beta)" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="e^x = 1 + \frac{ x }{ 1! } + \frac{ x^2 }{ 2! } + \frac{ x^3 }{ 3! } + \cdots, \,\, -\infty < x < \infty" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="f(x) = a_0 + \sum\limits_{n=1}^{\infty} \left( a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L} \right)" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="a^2 + b^2 = c^2" />
        </Grid>
        <Grid item xs={4}>
          <TeX math="(1+x)^n = 1 + \frac{ nx }{ 1! } + \frac{ n(n-1)x^2 }{ 2! } + \cdots" />
        </Grid>
      </Grid> 
  );
}

export default MathOne;
