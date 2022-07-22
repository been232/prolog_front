import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';

const Maths = (props) => {
  const Type = props.Type;
  const rows = props.rows;
  const [Text, setText] = useState('');
  const submitText = (value) => {
    setText(value);
    props.propFunction(value);
  };

  const MathOne = [
    'x = \\frac{ -b \\pm \\sqrt{ b^2-4ac } }{ 2a }',
    'A = \\pi r^2',
    '\\sin\\alpha \\pm \\sin\\beta = 2\\sin\\frac{1}{2}(\\alpha \\pm \\beta) \\cos\\frac{1}{2}(\\alpha \\mp \\beta)',
    '\\cos\\alpha + \\cos\\beta = 2\\cos\\frac{1}{2}(\\alpha + \\beta) \\cos\\frac{1}{2}(\\alpha - \\beta)',
    'e^x = 1 + \\frac{ x }{ 1! } + \\frac{ x^2 }{ 2! } + \\frac{ x^3 }{ 3! } + \\cdots, \\,\\, -\\infty < x < \\infty',
    'f(x) = a_0 + \\sum\\limits_{n=1}^{\\infty} \\left( a_n\\cos\\frac{n\\pi x}{L} + b_n\\sin\\frac{n\\pi x}{L} \\right)',
    'a^2 + b^2 = c^2',
    '(1+x)^n = 1 + \\frac{ nx }{ 1! } + \\frac{ n(n-1)x^2 }{ 2! } + \\cdots',
  ];

  const MathTwo = [
    '\\pm',
    '\\infty',
    '=',
    '\\ne',
    '\\sim',
    '\\times',
    '\\div',
    '!',
    '\\propto',
    '<',
    '\\ll',
    '>',
    '\\gg',
    '\\le',
    '\\ge',
    '\\mp',
  ];

  const returnBox = () => {
    if (Type == 1) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[0])}>
              <CardContent>
                <TeX math="x = \frac{ -b \pm \sqrt{ b^2-4ac } }{ 2a }" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[1])}>
              <CardContent>
                <TeX math="A = \pi r^2" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[2])}>
              <CardContent>
                <TeX math="\sin\alpha \pm \sin\beta = 2\sin\frac{1}{2}(\alpha \pm \beta) \cos\frac{1}{2}(\alpha \mp \beta)" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[3])}>
              <CardContent>
                <TeX math="\cos\alpha + \cos\beta = 2\cos\frac{1}{2}(\alpha + \beta) \cos\frac{1}{2}(\alpha - \beta)" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[4])}>
              <CardContent>
                <TeX math="e^x = 1 + \frac{ x }{ 1! } + \frac{ x^2 }{ 2! } + \frac{ x^3 }{ 3! } + \cdots, \,\, -\infty < x < \infty" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[5])}>
              <CardContent>
                <TeX math="f(x) = a_0 + \sum\limits_{n=1}^{\infty} \left( a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L} \right)" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[6])}>
              <CardContent>
                <TeX math="a^2 + b^2 = c^2" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathOne[7])}>
              <CardContent>
                <TeX math="(1+x)^n = 1 + \frac{ nx }{ 1! } + \frac{ n(n-1)x^2 }{ 2! } + \cdots" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    } else if (Type == 2) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[0])}>
              <CardContent>
                <TeX math="\pm" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[1])}>
              <CardContent>
                <TeX math="\infty" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[2])}>
              <CardContent>
                <TeX math="=" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[3])}>
              <CardContent>
                <TeX math="\ne" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[4])}>
              <CardContent>
                <TeX math="\sim" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[5])}>
              <CardContent>
                <TeX math="\times" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[6])}>
              <CardContent>
                <TeX math="\div" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
            <Card onClick={() => submitText(MathTwo[7])}>
              <CardContent>
                <TeX math="!" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[8])}>
                <CardContent>
                  <TeX math="\propto" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[9])}>
                <CardContent>
                  <TeX math="<" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[10])}>
                <CardContent>
                  <TeX math="\ll" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[11])}>
                <CardContent>
                  <TeX math=">" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[12])}>
                <CardContent>
                  <TeX math="\gg" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[13])}>
                <CardContent>
                  <TeX math="\le" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[14])}>
                <CardContent>
                  <TeX math="\ge" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={rows}>
              <Card onClick={() => submitText(MathTwo[15])}>
                <CardContent>
                  <TeX math="\mp" />
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      );
    }
  };
  return <Box>{returnBox()}</Box>;
};

export default Maths;
