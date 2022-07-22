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
    '\\cong',
    '\\approx',
    '\\equiv',
    '\\forall',
    '\\complement',
    '\\partial',
    '\\surd',
    '\\cup',
    '\\cap',
    '\\emptyset',
    '\\%',
    '{^\\circ}',
    '{^\\circ}\\mathrm{F}',
    '{^\\circ}\\mathrm{C}',
    '\\Delta',
    '\\nabla',
    '\\exists',
    '\\not\\exists',
    '\\in',
    '\\ni',
    '\\gets',
    '\\uparrow',
    '\\to',
    '\\downarrow',
    '\\leftrightarrow',
    '\\therefore',
    '+',
    '-',
    '\\neg',
    '\\alpha',
    '\\beta',
    '\\gamma',
    '\\delta',
    '\\epsilon',
    '\\varepsilon',
    '\\theta',
    '\\vartheta',
    '\\mu',
    '\\pi',
    '\\rho',
    '\\sigma',
    '\\tau',
    '\\phi',
    '\\omega',
    '\\ast',
    '\\bullet',
    '\\vdots',
    '\\cdots',
    '\\aleph',
    '\\beth',
  ];

  const MathTwoOne = [
    '\\dot+',
    '\\dot-',
    '\\setminus',
    '\\Cap',
    '\\Cup',
    '\\boxminus',
    '\\boxtimes',
    '\\boxdot',
    '\\boxplus',
    '\\divideontimes',
    '\\ltimes',
    '\\rtimes',
    '\\leftthreetimes',
    '\\rightthreetimes',
    '\\curlyvee',
    '\\curlywedge',
    '\\circleddash',
    '\\intercal',
    '\\oplus',
    '\\ominus',
    '\\otimes',
    '\\oslash',
    '\\odot',
    '\\circledast',
    '\\circledcirc',
    '\\dagger',
    '\\ddagger',
    '\\ast',
    '\\diamond',
    '\\wr',
    '\\triangle',
    '\\bigwedge',
    '\\bigvee',
    '\\bigodot',
    '\\bigotimes',
    '\\bigoplus',
    '\\sqcap',
    '\\sqcup',
    '\\biguplus',
  ];

  const MathThree = [
    '\\alpha',
    '\\beta',
    '\\gamma',
    '\\delta',
    '\\epsilon',
    '\\varepsilon',
    '\\zeta',
    '\\eta',
    '\\theta',
    '\\vartheta',
    '\\iota',
    '\\kappa',
    '\\lambda',
    '\\mu',
    '\\nu',
    '\\xi',
    '\\omicron',
    '\\pi',
    '\\varpi',
    '\\rho',
    '\\varrho',
    '\\sigma',
    '\\varsigma',
    '\\tau',
    '\\upsilon',
    '\\phi',
    '\\varphi',
    '\\chi',
    '\\psi',
    '\\omega',
  ];

  const MathThreeOne = [
    '\\Alpha',
    '\\Beta',
    '\\Gamma',
    '\\Delta',
    '\\Epsilon',
    '\\Zeta',
    '\\Eta',
    '\\Theta',
    '\\Iota',
    '\\Kappa',
    '\\Lambda',
    '\\Mu',
    '\\Nu',
    '\\Xi',
    '\\Omicron',
    '\\Pi',
    '\\Rho',
    '\\Sigma',
    '\\Tau',
    '\\Upsilon',
    '\\Phi',
    '\\Chi',
    '\\Psi',
    '\\Omega',
  ];

  const MathThreeTwo = [
    '\\forall',
    '\\complement',
    '\\mathfrak{C}',
    '\\partial',
    '\\eth',
    '\\varepsilon',
    '\\digamma',
    '\\Finv',
    '\\mathcal{H}',
    '\\mathfrak{H}',
    'h',
    '\\hbar',
    '\\imath',
    '\\Im',
    'j',
    '\\kappa',
    '\\mathcal{L}',
    '\\mathbb{N}',
    '\\wp',
    '\\mathbb{Q}',
    '\\mathcal{R}',
    '\\Re',
    '\\mathbb{R}',
    '\\mathbb{Z}',
    '\\mho',
    '\\AA',
    '\\mathcal{B}',
    '\\mathcal{E}',
    '\\exists',
    '\\nexists',
    '\\mathcal{F}',
    '\\mathcal{M}',
    '\\aleph',
    '\\beth',
    '\\gimel',
    '\\daleth',
  ];

  const MathThreethree = [
    '\\mathcal{A}',
    '\\mathcal{B}',
    '\\mathcal{C}',
    '\\mathcal{D}',
    '\\mathcal{E}',
    '\\mathcal{F}',
    '\\mathcal{G}',
    '\\mathcal{H}',
    '\\mathcal{I}',
    '\\mathcal{J}',
    '\\mathcal{K}',
    '\\mathcal{L}',
    '\\mathcal{M}',
    '\\mathcal{N}',
    '\\mathcal{O}',
    '\\mathcal{P}',
    '\\mathcal{Q}',
    '\\mathcal{R}',
    '\\mathcal{S}',
    '\\mathcal{T}',
    '\\mathcal{U}',
    '\\mathcal{V}',
    '\\mathcal{W}',
    '\\mathcal{X}',
    '\\mathcal{Y}',
    '\\mathcal{Z}',
  ];

  const MathThreefour = [
    '\\mathfrak{A}',
    '\\mathfrak{B}',
    '\\mathfrak{C}',
    '\\mathfrak{D}',
    '\\mathfrak{E}',
    '\\mathfrak{F}',
    '\\mathfrak{G}',
    '\\mathfrak{H}',
    '\\mathfrak{I}',
    '\\mathfrak{J}',
    '\\mathfrak{K}',
    '\\mathfrak{L}',
    '\\mathfrak{M}',
    '\\mathfrak{N}',
    '\\mathfrak{O}',
    '\\mathfrak{P}',
    '\\mathfrak{Q}',
    '\\mathfrak{R}',
    '\\mathfrak{S}',
    '\\mathfrak{T}',
    '\\mathfrak{U}',
    '\\mathfrak{V}',
    '\\mathfrak{W}',
    '\\mathfrak{X}',
    '\\mathfrak{Y}',
    '\\mathfrak{Z}',
    '\\mathfrak{a}',
    '\\mathfrak{b}',
    '\\mathfrak{c}',
    '\\mathfrak{d}',
    '\\mathfrak{e}',
    '\\mathfrak{f}',
    '\\mathfrak{g}',
    '\\mathfrak{h}',
    '\\mathfrak{i}',
    '\\mathfrak{j}',
    '\\mathfrak{k}',
    '\\mathfrak{l}',
    '\\mathfrak{m}',
    '\\mathfrak{n}',
    '\\mathfrak{o}',
    '\\mathfrak{p}',
    '\\mathfrak{q}',
    '\\mathfrak{r}',
    '\\mathfrak{s}',
    '\\mathfrak{t}',
    '\\mathfrak{u}',
    '\\mathfrak{v}',
    '\\mathfrak{w}',
    '\\mathfrak{x}',
    '\\mathfrak{y}',
    '\\mathfrak{z}',
  ];

  const MathThreefive = [
    '\\mathbb{A}',
    '\\mathbb{B}',
    '\\mathbb{C}',
    '\\mathbb{D}',
    '\\mathbb{E}',
    '\\mathbb{F}',
    '\\mathbb{G}',
    '\\mathbb{H}',
    '\\mathbb{I}',
    '\\mathbb{J}',
    '\\mathbb{K}',
    '\\mathbb{L}',
    '\\mathbb{M}',
    '\\mathbb{N}',
    '\\mathbb{O}',
    '\\mathbb{P}',
    '\\mathbb{Q}',
    '\\mathbb{R}',
    '\\mathbb{S}',
    '\\mathbb{T}',
    '\\mathbb{U}',
    '\\mathbb{V}',
    '\\mathbb{W}',
    '\\mathbb{X}',
    '\\mathbb{Y}',
    '\\mathbb{Z}',
  ];

  const MathFour = [
    '=',
    '\\ne',
    '<',
    '>',
    '\\le',
    '\\ge',
    '\\not<',
    '\\not\\le',
    '\\not>',
    '\\not\\ge',
    '\\equiv',
    '\\sim',
    '\\simeq',
    '\\approx',
    '\\cong',
    '\\not\\equiv',
    '\\not\\simeq',
    '\\not\\approx',
    '\\not\\cong',
    '\\propto',
    '\\ll',
    '\\gg',
    '\\in',
    '\\ni',
    '\\not\\in',
    '\\subset',
    '\\supset',
    '\\subseteq',
    '\\supseteq',
    '\\prec',
    '\\succ',
    '\\preccurlyeq',
    '\\succcurlyeq',
    '\\sqsubset',
    '\\sqsupset',
    '\\sqsubseteq',
    '\\sqsupseteq',
    '\\parallel',
    '\\perp',
    '\\vdash',
    '\\dashv',
    '\\Join',
    '\\asymp',
  ];

  const MathFourone = [
    '\\ne',
    '\\not<',
    '\\not>',
    '\\not\\le',
    '\\not\\ge',
    '\\not\\equiv',
    '\\not\\sim',
    '\\not\\simeq',
    '\\not\\approx',
    '\\not\\cong',
    '\\not\\asymp',
    '\\not\\leq',
    '\\not\\geq',
    '\\lneqq',
    '\\gneqq',
    '\\nprec',
    '\\nsucc',
    '\\not\\preccurlyeq',
    '\\not\\succcurlyeq',
    '\\not\\in',
    '\\not\\ni',
    '\\not\\subset',
    '\\not\\supset',
    '\\not\\subseteq',
    '\\not\\supseteq',
    '\\subsetneqq',
    '\\supsetneqq',
    '\\not\\sqsubseteq',
    '\\not\\sqsupseteq',
    '\\lnsim',
    '\\gnsim',
    '\\precnsim',
    '\\succnsim',
    '\\ntriangleleft',
    '\\ntriangleright',
    '\\ntrianglelefteq',
    '\\ntrianglerighteq',
    '\\nmid',
    '\\nparallel',
    '\\nvdash',
    '\\nvDash',
    '\\nVdash',
    '\\nVDash',
    '\\nexists'
  ];

  const MathFourtwo = ['\\therefore'];
  const returnBox = () => {
    if (Type == 1) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>기본 제공</h4>
          <Grid container spacing={2}>
            {MathOne.map((one) => (
              <Grid item key={one} xs={rows}>
                <Card onClick={() => submitText(one)}>
                  <CardContent>
                    <TeX math={one} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 2) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>기본 수학 연산자</h4>
          <Grid container spacing={2}>
            {MathTwo.map((two) => (
              <Grid item key={two} xs={rows}>
                <Card onClick={() => submitText(two)}>
                  <CardContent>
                    <TeX math={two} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>고급 이신 연산자</h4>
          <Grid container spacing={2}>
            {MathTwoOne.map((twoone) => (
              <Grid item key={twoone} xs={rows}>
                <Card onClick={() => submitText(twoone)}>
                  <CardContent>
                    <TeX math={twoone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 3) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>그리스 소문자</h4>
          <Grid container spacing={2}>
            {MathThree.map((three) => (
              <Grid item key={three} xs={rows}>
                <Card onClick={() => submitText(three)}>
                  <CardContent>
                    <TeX math={three} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>그리스 대문자</h4>
          <Grid container spacing={2}>
            {MathThreeOne.map((threeone) => (
              <Grid item key={threeone} xs={rows}>
                <Card onClick={() => submitText(threeone)}>
                  <CardContent>
                    <TeX math={threeone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>글자 꼴 기호</h4>
          <Grid container spacing={2}>
            {MathThreeTwo.map((threetwo) => (
              <Grid item key={threetwo} xs={rows}>
                <Card onClick={() => submitText(threetwo)}>
                  <CardContent>
                    <TeX math={threetwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>첨자</h4>
          <Grid container spacing={2}>
            {MathThreethree.map((threethree) => (
              <Grid item key={threethree} xs={rows}>
                <Card onClick={() => submitText(threethree)}>
                  <CardContent>
                    <TeX math={threethree} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>독일 활자체</h4>
          <Grid container spacing={2}>
            {MathThreefour.map((threefour) => (
              <Grid item key={threefour} xs={rows}>
                <Card onClick={() => submitText(threefour)}>
                  <CardContent>
                    <TeX math={threefour} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>이중 취소선</h4>
          <Grid container spacing={2}>
            {MathThreefive.map((threefive) => (
              <Grid item key={threefive} xs={rows}>
                <Card onClick={() => submitText(threefive)}>
                  <CardContent>
                    <TeX math={threefive} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 4) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>일반 관계형 연산자</h4>
          <Grid container spacing={2}>
            {MathFour.map((four) => (
              <Grid item key={four} xs={rows}>
                <Card onClick={() => submitText(four)}>
                  <CardContent>
                    <TeX math={four} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>관계 부정 연산자</h4>
          <Grid container spacing={2}>
            {MathFourone.map((fourone) => (
              <Grid item key={fourone} xs={rows}>
                <Card onClick={() => submitText(fourone)}>
                  <CardContent>
                    <TeX math={fourone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>고급 관계형 연산자</h4>
          <Grid container spacing={2}>
            {MathFourtwo.map((fourtwo) => (
              <Grid item key={fourtwo} xs={rows}>
                <Card onClick={() => submitText(fourtwo)}>
                  <CardContent>
                    <TeX math={fourtwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
  };
  return <Box>{returnBox()}</Box>;
};
export default Maths;
