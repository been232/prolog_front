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
    '\\nexists',
  ];

  const MathFourtwo = [
    '\\therefore',
    '\\because',
    '\\lll',
    '\\ggg',
    '\\le',
    '\\ge',
    '\\lesssim',
    '\\gtrsim',
    '\\lessdot',
    '\\gtrdot',
    '\\lessgtr',
    '\\lesseqgtr',
    '\\gtrless',
    '\\gtreqless',
    '\\doteqdot',
    '\\fallingdotseq',
    '\\risingdotseq',
    '\\backsim',
    '\\approxeq',
    '\\simeq',
    '\\preccurlyeq',
    '\\succcurlyeq',
    '\\curlyeqprec',
    '\\curlyeqsucc',
    '\\precsim',
    '\\succsim',
    '\\eqslantless',
    '\\eqslantgtr',
    '\\subseteq',
    '\\supseteq',
    '\\vartriangleleft',
    '\\vartriangleright',
    '\\trianglelefteq',
    '\\trianglerighteq',
    '\\vDash',
    '\\Subset',
    '\\Supset',
    '\\sqsubset',
    '\\sqsupset',
    '\\Vdash',
    '\\Vvdash',
    '\\eqcirc',
    '\\circeq',
    '\\triangleq',
    '\\bumpeq',
    '\\Bumpeq',
    '\\propto',
    '\\between',
    '\\pitchfork',
    '\\doteq',
    '\\Join',
  ];

  const MathFive = [
    '\\gets',
    '\\to',
    '\\uparrow',
    '\\downarrow',
    '\\leftrightarrow',
    '\\updownarrow',
    '\\Leftarrow',
    '\\Rightarrow',
    '\\Uparrow',
    '\\Downarrow',
    '\\Leftrightarrow',
    '\\Updownarrow',
    '\\longleftarrow',
    '\\longrightarrow',
    '\\longleftrightarrow',
    '\\Longleftarrow',
    '\\Longrightarrow',
    '\\Longleftrightarrow',
    '\\nearrow',
    '\\nwarrow',
    '\\searrow',
    '\\swarrow',
    '\\nleftarrow',
    '\\nrightarrow',
    '\\nleftrightarrow',
    '\\nLeftarrow',
    '\\nRightarrow',
    '\\nLeftrightarrow',
    '\\dashleftarrow',
    '\\dashrightarrow',
    '\\hookleftarrow',
    '\\hookrightarrow',
    '\\leftharpoonup',
    '\\leftharpoondown',
    '\\rightharpoonup',
    '\\rightharpoondown',
    '\\upharpoonleft',
    '\\upharpoonright',
    '\\downharpoonleft',
    '\\downharpoonright',
    '\\leftrightharpoons',
    '\\rightleftharpoons',
    '\\leftleftarrows',
    '\\rightrightarrows',
    '\\upuparrows',
    '\\downdownarrows',
    '\\leftrightarrows',
    '\\rightleftarrows',
    '\\looparrowleft',
    '\\looparrowright',
    '\\leftarrowtail',
    '\\rightarrowtail',
    '\\Lsh',
    '\\Rsh',
    '\\Lleftarrow',
    '\\Rrightarrow',
    '\\twoheadleftarrow',
    '\\twoheadrightarrow',
    '\\curvearrowleft',
    '\\curvearrowright',
    '\\circlearrowleft',
    '\\circlearrowright',
    '\\multimap',
    '\\leftrightsquigarrow',
    '\\leadsto',
    '\\rightsquigarrow',
  ];

  const MathFiveone = [
    '\\angle',
    '\\measuredangle',
    '\\sphericalangle',
    '\\perp',
    '\\nmid',
    '\\parallel',
    '\\nparallel',
    ':',
    '::',
    '\\therefore',
    '\\because',
  ];

  const MathSix = [
    '\\frac{ 1 }{ 2 }',
    '^{ 1 }/_{ 2 }',
    '{ x }/{ y }',
    '{\\small \\frac{ 1 }{ 2 } }',
  ];

  const MathSixone = [
    '\\frac{ dy }{ dx }',
    '\\frac{ \\Delta y }{ \\Delta x }',
    '\\frac{ \\partial y }{ \\partial x }',
    '\\frac{ \\delta y }{ \\delta x }',
    '\\frac{ \\pi }{ 2 }',
  ];

  const MathSeven = ['N^{2}', 'N_{1}', 'N_{1}^{2}', '_{1}^{2} N'];

  const MathSevenone = ['x_{y^{2}}', 'e^{-i \\omega t}', 'x^{2}', '_{1}^{n} Y'];

  const MathEight = [
    '\\sqrt{1}',
    '\\sqrt[1]{2}',
    '\\sqrt[2]{x}',
    '\\sqrt[3]{x}',
  ];

  const MathEightone = [
    '\\frac{ -b\\pm\\sqrt{ b^2-4ac } }{ 2a }',
    '\\sqrt{ a^2 + b^2 }',
  ];

  const MathNine = [
    '\\int {x}',
    '\\int_{1}^{2} {x}',
    '\\int\\limits_{1}^{2} {x}',
    '\\iint {x}',
    '\\iint_{1}^{2} {x}',
    '\\iint\\limits_{1}^{2} {x}',
    '\\iiint {x}',
    '\\iiint_{1}^{2} {x}',
    '\\iiint\\limits_{1}^{2} {x}',
  ];

  const MathNineone = [
    '\\oint {x}',
    '\\oint_{1}^{2} {x}',
    '\\oint\\limits_{1}^{2} {x}',
  ];

  const MathNinetwo = ['dx', 'dy', 'd\\theta'];

  const MathTen = [
    '\\sum { x }',
    '\\sum_{ i=1 }^{ n } { x }',
    '\\sum \\nolimits_{ i=1 }^{ n } { x }',
    '\\sum_{ i=1 } { x }',
    '\\sum \\nolimits_{ i=1 } { x }',
  ];

  const MathTenone = [
    '\\prod { x }',
    '\\prod_{ i=1 }^{ n } { x }',
    '\\prod \\nolimits_{ i=1 }^{ n } { x }',
    '\\prod_{ i=1 } { x }',
    '\\prod \\nolimits_{ i=1 } { x }',
    '\\coprod { x }',
    '\\coprod_{ i=1 }^{ n } { x }',
    '\\coprod \\nolimits_{ i=1 }^{ n } { x }',
    '\\coprod_{ i=1 } { x }',
    '\\coprod \\nolimits_{ i=1 } { x }',
  ];

  const MathTentwo = [
    '\\bigcup { x }',
    '\\bigcup_{ i=1 }^{ n } { x }',
    '\\bigcup \\nolimits_{ i=1 }^{ n } { x }',
    '\\bigcup_{ i=1 } { x }',
    '\\bigcup \\nolimits_{ i=1 } { x }',
    '\\bigcap { x }',
    '\\bigcap_{ i=1 }^{ n } { x }',
    '\\bigcap \\nolimits_{ i=1 }^{ n } { x }',
    '\\bigcap_{ i=1 } { x }',
    '\\bigcap \\nolimits_{ i=1 } { x }',
  ];

  const MathTenthree = [
    '\\bigvee { x }',
    '\\bigvee_{ i=1 }^{ n } { x }',
    '\\bigvee \\nolimits_{ i=1 }^{ n } { x }',
    '\\bigvee_{ i=1 } { x }',
    '\\bigvee \\nolimits_{ i=1 } { x }',
    '\\bigwedge { x }',
    '\\bigwedge_{ i=1 }^{ n } { x }',
    '\\bigwedge \\nolimits_{ i=1 }^{ n } { x }',
    '\\bigwedge_{ i=1 } { x }',
    '\\bigwedge \\nolimits_{ i=1 } { x }',
  ];

  const MathTenfour = [
    '\\sum_{k} \\begin{pmatrix} n \\\\ k \\end{pmatrix}',
    '\\sum_{ i=0 }^{ n } { x }',
    '\\sum_{ \\substack{ 0 \\leq i \\leq m \\\\ 0 < j < n } } P(i,j)',
    '\\prod_{ k=1 }^{ n } { A_k }',
    '\\bigcup_{ n=1 }^{ m } ( X_n \\cap Y_n )',
  ];

  const MathEleven = [
    '\\Big( {x} \\Big)',
    '\\Big\\lbrack {x} \\Big\\rbrack',
    '\\Big\\{ {x} \\Big\\}',
    '\\Big\\langle {x} \\Big\\rangle',
    '\\Big\\lfloor x \\Big\\rfloor',
    '\\Big\\lceil x \\Big\\rceil',
    '\\Big\\lvert x \\Big\\rvert',
    '\\Big\\lVert x \\Big\\rVert',
    '\\Big\\lbrack x \\Big\\lbrack',
    '\\Big\\rbrack x \\Big\\rbrack',
    '\\Big\\rbrack x \\Big\\lbrack',
  ];

  const MathElevenone = [
    '\\Big( {x|y} \\Big)',
    '\\Big\\lbrack {x|y} \\Big\\rbrack',
    '\\Big\\{ {x|y} \\Big\\}',
    '\\Big\\langle {x|y|z} \\Big\\rangle',
  ];

  const MathEleventwo = [
    '\\Big( x',
    'x \\Big)',
    '\\Big\\lbrack x',
    'x \\Big\\rbrack',
    '\\Big\\{ x',
    'x \\Big\\}',
    '\\Big\\langle x',
    'x \\Big\\rangle',
    '\\Big\\lfloor x',
    'x \\Big\\rfloor',
    '\\Big\\lceil x',
    'x \\Big\\rceil',
    '\\Big| x',
    'x \\Big|',
    '\\Big\\| x',
    'x \\Big\\|',
  ];

  const MathTwelve = [
    '\\sin{ }',
    '\\cos{ }',
    '\\tan{ }',
    '\\csc{ }',
    '\\sec{ }',
    '\\cot{ }',
  ];

  const MathTwelveone = [
    '\\sin^{-1}{ }',
    '\\cos^{-1}{ }',
    '\\tan^{-1}{ }',
    '\\csc^{-1}{ }',
    '\\sec^{-1}{ }',
    '\\cot^{-1}{ }',
  ];

  const MathTwelvetwo = ['\\sinh{ }', '\\cosh{ }', '\\tanh{ }'];

  const MathTwelvethree = [
    '\\sinh^{-1}{ }',
    '\\cosh^{-1}{ }',
    '\\tanh^{-1}{ }',
  ];

  const MathTwelvefour = [
    '\\sin \\theta',
    '\\cos 2x',
    '\\tan\\theta = \\frac{ \\sin\\theta }{ \\cos\\theta }',
  ];

  const MathThirteen = [
    '\\dot{a}',
    '\\ddot{a}',
    '\\hat{a}',
    '\\check{a}',
    '\\acute{a}',
    '\\grave{a}',
    '\\breve{a}',
    '\\tilde{a}',
    '\\bar{a}',
    '\\bar{\\bar{a}}',
    '\\overbrace{a}',
    '\\underbrace{a}',
    '\\overbrace{a}^{}',
    '\\underbrace{a}_{}',
    '\\overleftarrow{a}',
    '\\overrightarrow{a}',
    '\\overleftrightarrow{a}',
  ];

  const MathThirteenone = ['\\boxed{ }', '\\boxed{ a^2=b^2+c^2 }'];

  const MathThirteentwo = [
    '\\vec {A }',
    '\\overline{ ABC }',
    '\\overline{ x \\oplus y }',
  ];

  const Mathfourteen = [
    '\\log_{x} {y}',
    '\\log {y}',
    '\\lim\\limits_{x} {y}',
    '\\min\\limits_{x} {y}',
    '\\max\\limits_{x} {y}',
    '\\ln y',
  ];

  const Mathfourteenone = [
    '\\lim\\limits_{n\\to\\infty}{\\left( 1+\\frac 1 n \\right)^n}',
    '\\max\\limits_{0 \\leq x \\leq 1}{ xe^{-x^2} }',
  ];

  const Mathfifteen = [
    ':=',
    '==',
    '+=',
    '-=',
    '\\overset{{ def}}{=}',
    '\\overset{ m}{=}',
    '\\overset{ \\Delta}{=}',
  ];

  const Mathfifteenone = [
    '\\xleftarrow[a]{ }',
    '\\xrightarrow[a]{ }',
    '\\xleftarrow[]{a}',
    '\\xrightarrow[]{a}',
    '\\xLeftarrow[a]{ }',
    '\\xRightarrow[a]{ }',
    '\\xLeftarrow[ ]{a}',
    '\\xRightarrow[ ]{a}',
    '\\xleftrightarrow[a]{ }',
    '\\xleftrightarrow[ ]{a}',
    '\\xLeftrightarrow[a]{ }',
    '\\xLeftrightarrow[ ]{a}',
  ];

  const Mathfifteentwo = ['\\xrightarrow{yields}', '\\xrightarrow{\\Delta}'];

  const MathSixteen = [
    '\\begin{matrix} 1 & 2 \\end{matrix}',
    '\\begin{matrix} 1 \\\\ 2 \\end{matrix}',
    '\\begin{matrix} 1 & 2 & 3 \\end{matrix}',
    '\\begin{matrix} 1 \\\\ 2 \\\\3 \\end{matrix}',
    '\\begin{matrix} 1 & 2 \\\\ 3 & 4 \\end{matrix}',
    '\\begin{matrix} 1 & 2 & 3 \\\\ 4 & 5 & 6\\end{matrix}',
    '\\begin{matrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{matrix}',
    '\\begin{matrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{matrix}',
  ];

  const MathSixteenone = ['\\cdots', '\\dots', '\\vdots', '\\ddots'];

  const MathSixteentwo = [
    '\\begin{matrix} 1 & 0 \\\\ 0 & 1 \\end{matrix}',
    '\\begin{matrix} 1 & {} \\\\ {} & 1 \\end{matrix}',
    '\\begin{matrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{matrix}',
    '\\begin{matrix} 1 & {} & {} \\\\ {} & 1 & {} \\\\ {} & {} & 1 \\end{matrix}',
  ];

  const MathSixteenthree = [
    '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}',
    '\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}',
    '\\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix}',
    '\\begin{Vmatrix} 1 & 2 \\\\ 3 & 4 \\end{Vmatrix}',
  ];

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
                <Card style={{ height: 100 }} onClick={() => submitText(one)}>
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
                <Card style={{ height: 100 }} onClick={() => submitText(two)}>
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
                <Card style={{ height: 100 }} onClick={() => submitText(twoone)}>
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
                <Card style={{ height: 100 }} onClick={() => submitText(three)}>
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(threeone)}
                >
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(threetwo)}
                >
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(threethree)}
                >
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(threefour)}
                >
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(threefive)}
                >
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
                <Card style={{ height: 100 }} onClick={() => submitText(four)}>
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fourone)}
                >
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
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fourtwo)}
                >
                  <CardContent>
                    <TeX math={fourtwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 5) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>화살표</h4>
          <Grid container spacing={2}>
            {MathFive.map((five) => (
              <Grid item key={five} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(five)}>
                  <CardContent>
                    <TeX math={five} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>기하 도형</h4>
          <Grid container spacing={2}>
            {MathFiveone.map((fiveone) => (
              <Grid item key={fiveone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fiveone)}
                >
                  <CardContent>
                    <TeX math={fiveone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 6) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>분수</h4>
          <Grid container spacing={2}>
            {MathSix.map((six) => (
              <Grid item key={six} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(six)}>
                  <CardContent>
                    <TeX math={six} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>상분수</h4>
          <Grid container spacing={2}>
            {MathSixone.map((sixone) => (
              <Grid item key={sixone} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(sixone)}>
                  <CardContent>
                    <TeX math={sixone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 7) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>아래 첨자 및 위 첨자</h4>
          <Grid container spacing={2}>
            {MathSeven.map((seven) => (
              <Grid item key={seven} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(seven)}>
                  <CardContent>
                    <TeX math={seven} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 아래 첨자 및 위 첨자</h4>
          <Grid container spacing={2}>
            {MathSevenone.map((sevenone) => (
              <Grid item key={sevenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(sevenone)}
                >
                  <CardContent>
                    <TeX math={sevenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 8) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>근호</h4>
          <Grid container spacing={2}>
            {MathEight.map((eight) => (
              <Grid item key={eight} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(eight)}>
                  <CardContent>
                    <TeX math={eight} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>근의 공식</h4>
          <Grid container spacing={2}>
            {MathEightone.map((eightone) => (
              <Grid item key={eightone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(eightone)}
                >
                  <CardContent>
                    <TeX math={eightone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 9) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>적분</h4>
          <Grid container spacing={2}>
            {MathNine.map((nine) => (
              <Grid item key={nine} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(nine)}>
                  <CardContent>
                    <TeX math={nine} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>선적분</h4>
          <Grid container spacing={2}>
            {MathNineone.map((nineone) => (
              <Grid item key={nineone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(nineone)}
                >
                  <CardContent>
                    <TeX math={nineone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>미분</h4>
          <Grid container spacing={2}>
            {MathNinetwo.map((ninetwo) => (
              <Grid item key={ninetwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(ninetwo)}
                >
                  <CardContent>
                    <TeX math={ninetwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 10) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>총합</h4>
          <Grid container spacing={2}>
            {MathTen.map((ten) => (
              <Grid item key={ten} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(ten)}>
                  <CardContent>
                    <TeX math={ten} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>곱과 공곱</h4>
          <Grid container spacing={2}>
            {MathTenone.map((tenone) => (
              <Grid item key={tenone} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(tenone)}>
                  <CardContent>
                    <TeX math={tenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>합집합과 교집합</h4>
          <Grid container spacing={2}>
            {MathTentwo.map((tentwo) => (
              <Grid item key={tentwo} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(tentwo)}>
                  <CardContent>
                    <TeX math={tentwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>기타 대형 연산자</h4>
          <Grid container spacing={2}>
            {MathTenthree.map((tenthree) => (
              <Grid item key={tenthree} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(tenthree)}
                >
                  <CardContent>
                    <TeX math={tenthree} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 대형 연산자</h4>
          <Grid container spacing={2}>
            {MathTenfour.map((tenfour) => (
              <Grid item key={tenfour} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(tenfour)}
                >
                  <CardContent>
                    <TeX math={tenfour} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 11) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>대괄호</h4>
          <Grid container spacing={2}>
            {MathEleven.map((eleven) => (
              <Grid item key={eleven} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(eleven)}>
                  <CardContent>
                    <TeX math={eleven} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>구분 기호가 있는 대괄호</h4>
          <Grid container spacing={2}>
            {MathElevenone.map((elevenone) => (
              <Grid item key={elevenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(elevenone)}
                >
                  <CardContent>
                    <TeX math={elevenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>한쪽 대괄호</h4>
          <Grid container spacing={2}>
            {MathEleventwo.map((eleventwo) => (
              <Grid item key={eleventwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(eleventwo)}
                >
                  <CardContent>
                    <TeX math={eleventwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 12) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>삼각함수</h4>
          <Grid container spacing={2}>
            {MathTwelve.map((twelve) => (
              <Grid item key={twelve} xs={rows}>
                <Card style={{ height: 100 }} onClick={() => submitText(twelve)}>
                  <CardContent>
                    <TeX math={twelve} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>역함수</h4>
          <Grid container spacing={2}>
            {MathTwelveone.map((twelveone) => (
              <Grid item key={twelveone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(twelveone)}
                >
                  <CardContent>
                    <TeX math={twelveone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>쌍곡선 함수</h4>
          <Grid container spacing={2}>
            {MathTwelvetwo.map((twelvetwo) => (
              <Grid item key={twelvetwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(twelvetwo)}
                >
                  <CardContent>
                    <TeX math={twelvetwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>역쌍곡선 함수</h4>
          <Grid container spacing={2}>
            {MathTwelvethree.map((twelvethree) => (
              <Grid item key={twelvethree} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(twelvethree)}
                >
                  <CardContent>
                    <TeX math={twelvethree} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 함수</h4>
          <Grid container spacing={2}>
            {MathTwelvefour.map((twelvefour) => (
              <Grid item key={twelvefour} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(twelvefour)}
                >
                  <CardContent>
                    <TeX math={twelvefour} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 13) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>악센트</h4>
          <Grid container spacing={2}>
            {MathThirteen.map((thirteen) => (
              <Grid item key={thirteen} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(thirteen)}
                >
                  <CardContent>
                    <TeX math={thirteen} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>상자 테두리 수식</h4>
          <Grid container spacing={2}>
            {MathThirteenone.map((thirteenone) => (
              <Grid item key={thirteenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(thirteenone)}
                >
                  <CardContent>
                    <TeX math={thirteenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 악센트 개체</h4>
          <Grid container spacing={2}>
            {MathThirteentwo.map((thirteentwo) => (
              <Grid item key={thirteentwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(thirteentwo)}
                >
                  <CardContent>
                    <TeX math={thirteentwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 14) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>함수</h4>
          <Grid container spacing={2}>
            {Mathfourteen.map((fourteen) => (
              <Grid item key={fourteen} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fourteen)}
                >
                  <CardContent>
                    <TeX math={fourteen} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 함수</h4>
          <Grid container spacing={2}>
            {Mathfourteenone.map((fourteenone) => (
              <Grid item key={fourteenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fourteenone)}
                >
                  <CardContent>
                    <TeX math={fourteenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 15) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>기본 연산자</h4>
          <Grid container spacing={2}>
            {Mathfifteen.map((fifteen) => (
              <Grid item key={fifteen} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fifteen)}
                >
                  <CardContent>
                    <TeX math={fifteen} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>연산자 구조</h4>
          <Grid container spacing={2}>
            {Mathfifteenone.map((fifteenone) => (
              <Grid item key={fifteenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fifteenone)}
                >
                  <CardContent>
                    <TeX math={fifteenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>일반 연산자 구조</h4>
          <Grid container spacing={2}>
            {Mathfifteentwo.map((fifteentwo) => (
              <Grid item key={fifteentwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(fifteentwo)}
                >
                  <CardContent>
                    <TeX math={fifteentwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (Type == 16) {
      return (
        <Box
          sx={{
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <h4>빈 행렬</h4>
          <Grid container spacing={2}>
            {MathSixteen.map((sixteen) => (
              <Grid item key={sixteen} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(sixteen)}
                >
                  <CardContent>
                    <TeX math={sixteen} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>점 행렬</h4>
          <Grid container spacing={2}>
            {MathSixteenone.map((sixteenone) => (
              <Grid item key={sixteenone} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(sixteenone)}
                >
                  <CardContent>
                    <TeX math={sixteenone} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>항등 행렬</h4>
          <Grid container spacing={2}>
            {MathSixteentwo.map((sixteentwo) => (
              <Grid item key={sixteentwo} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(sixteentwo)}
                >
                  <CardContent>
                    <TeX math={sixteentwo} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <h4>대괄호가 있는 행렬 행렬</h4>
          <Grid container spacing={2}>
            {MathSixteenthree.map((sixteenthree) => (
              <Grid item key={sixteenthree} xs={rows}>
                <Card
                  style={{ height: 100 }}
                  onClick={() => submitText(sixteenthree)}
                >
                  <CardContent>
                    <TeX math={sixteenthree} />
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
