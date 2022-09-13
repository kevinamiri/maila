const fetch = require('node-fetch');
// async function


const Pointss = [
  {
    p: { x: 53.55903, y: 103.74277 },
    a: [53.55903, 103.74277],
    c: 'What are your products or services?'
  },
  {
    p: { x: 57.319145, y: 112.10878 },
    a: [57.319145, 112.10878],
    c: 'Why is your product or service unique or needed?'
  },
  {
    p: { x: 45.771553, y: 91.066795 },
    a: [45.771553, 91.066795],
    c: 'How does your product or service solve the problem?'
  },
  {
    p: { x: -7.9406934, y: 67.01128 },
    a: [-7.9406934, 67.01128],
    c: 'What is your business?'
  },
  {
    p: { x: 38.50291, y: 86.21665 },
    a: [38.50291, 86.21665],
    c: "How will your product or service solve your customer's problem?"
  },
  {
    p: { x: -13.609276, y: 71.53021 },
    a: [-13.609276, 71.53021],
    c: 'What is your business and what does it do?'
  },
  {
    p: { x: 8.023912, y: 28.005163 },
    a: [8.023912, 28.005163],
    c: 'Who are your customers and who is your target market?'
  },
  {
    p: { x: -22.050316, y: -43.844353 },
    a: [-22.050316, -43.844353],
    c: 'What are your key marketing plans?'
  },
  {
    p: { x: 43.364727, y: -8.495335 },
    a: [43.364727, -8.495335],
    c: "What is your startup's business model?"
  },
  {
    p: { x: 47.345737, y: 0.44594556 },
    a: [47.345737, 0.44594556],
    c: 'What is your business model?'
  },
  {
    p: { x: 33.55904, y: 73.17918 },
    a: [33.55904, 73.17918],
    c: 'Why do your target customers need your solution?'
  },
  {
    p: { x: 20.614914, y: 80.53535 },
    a: [20.614914, 80.53535],
    c: 'Why will customers buy from you?'
  },
  {
    p: { x: -16.387508, y: -37.27822 },
    a: [-16.387508, -37.27822],
    c: 'What are your key marketing and sales strategies?'
  },
  {
    p: { x: 4.094114, y: 19.475288 },
    a: [4.094114, 19.475288],
    c: 'Who is your target market?'
  },
  {
    p: { x: 19.746296, y: 44.113266 },
    a: [19.746296, 44.113266],
    c: 'Do you have any existing traction, such as users, paying customers, or partnerships?'
  },
  {
    p: { x: 93.01094, y: 17.208616 },
    a: [93.01094, 17.208616],
    c: 'What are your key milestones and objectives for your business?'
  },
  {
    p: { x: -11.869589, y: -25.77251 },
    a: [-11.869589, -25.77251],
    c: 'What is your go-to-market strategy?'
  },
  {
    p: { x: -102.545975, y: -67.06987 },
    a: [-102.545975, -67.06987],
    c: 'What are your costs?'
  },
  {
    p: { x: 86.47686, y: 27.307432 },
    a: [86.47686, 27.307432],
    c: 'What are your key goals for your business?'
  },
  {
    p: { x: -93.95409, y: -70.05509 },
    a: [-93.95409, -70.05509],
    c: 'What are your costs of goods sold and customer acquisition costs?'
  },
  {
    p: { x: -57.010174, y: 1.2699447 },
    a: [-57.010174, 1.2699447],
    c: 'How will you generate revenue?'
  },
  {
    p: { x: 56.86996, y: 3.3810604 },
    a: [56.86996, 3.3810604],
    c: 'What are the key elements of your business model?'
  },
  {
    p: { x: -59.674145, y: 8.803825 },
    a: [-59.674145, 8.803825],
    c: 'How do you plan to generate revenue?'
  },
  {
    p: { x: 109.05481, y: 5.8969674 },
    a: [109.05481, 5.8969674],
    c: 'What are the key milestones your startup has achieved so far?'
  },
  {
    p: { x: 1.0332764, y: 2.40216 },
    a: [1.0332764, 2.40216],
    c: 'How will you reach your target market?'
  },
  {
    p: { x: 105.377106, y: -42.262424 },
    a: [105.377106, -42.262424],
    c: 'What is the problem your startup is solving?'
  },
  {
    p: { x: -157.48007, y: -2.0208962 },
    a: [-157.48007, -2.0208962],
    c: 'What are your key competitive advantages?'
  },
  {
    p: { x: 89.15603, y: 35.903774 },
    a: [89.15603, 35.903774],
    c: 'What are your long-term goals for the business?'
  },
  {
    p: { x: -2.6846876, y: -4.7632165 },
    a: [-2.6846876, -4.7632165],
    c: 'How will you reach and engage your target market?'
  },
  {
    p: { x: -46.22875, y: 11.519539 },
    a: [-46.22875, 11.519539],
    c: 'How will you generate revenue with your business model?'
  },
  {
    p: { x: 37.16744, y: -69.437706 },
    a: [37.16744, -69.437706],
    c: 'What are the risks and challenges associated with your business?'
  },
  {
    p: { x: -114.97277, y: 88.35114 },
    a: [-114.97277, 88.35114],
    c: 'What are your expansion plans?'
  },
  {
    p: { x: 73.57562, y: 10.768791 },
    a: [73.57562, 10.768791],
    c: 'What are the key areas you will focus on in your business?'
  },
  {
    p: { x: 100.992004, y: -36.438892 },
    a: [100.992004, -36.438892],
    c: 'How does your startup solve the problem better than other existing solutions?'
  },
  {
    p: { x: -166.40001, y: -2.8954608 },
    a: [-166.40001, -2.8954608],
    c: 'What is your competitive landscape?'
  },
  {
    p: { x: 45.625847, y: -75.96174 },
    a: [45.625847, -75.96174],
    c: 'What are the key risks and challenges facing your business?'
  },
  {
    p: { x: -94.7716, y: -49.920826 },
    a: [-94.7716, -49.920826],
    c: 'How much will it cost to start and operate your business?'
  },
  {
    p: { x: -41.903522, y: -107.86035 },
    a: [-41.903522, -107.86035],
    c: 'Why is now the right time to start this business?'
  },
  {
    p: { x: -113.170364, y: -68.56816 },
    a: [-113.170364, -68.56816],
    c: 'What are your key expenses and how will they be covered?'
  },
  {
    p: { x: 48.445854, y: -67.52311 },
    a: [48.445854, -67.52311],
    c: 'What are the key risks and challenges you face in your business?'
  },
  {
    p: { x: 128.32259, y: -63.851677 },
    a: [128.32259, -63.851677],
    c: 'What problem are you solving?'
  },
  {
    p: { x: -95.19956, y: 1.0390553 },
    a: [-95.19956, 1.0390553],
    c: 'How long will it take to become profitable?'
  },
  {
    p: { x: -93.792404, y: 10.715869 },
    a: [-93.792404, 10.715869],
    c: 'When do you expect to become profitable?'
  },
  {
    p: { x: -84.91379, y: 5.1121964 },
    a: [-84.91379, 5.1121964],
    c: 'How soon do you expect to generate profits?'
  },
  {
    p: { x: 37.763306, y: -148.35744 },
    a: [37.763306, -148.35744],
    c: 'What are your key financial metrics?'
  },
  {
    p: { x: 49.52504, y: -148.91037 },
    a: [49.52504, -148.91037],
    c: 'What are your key performance indicators (KPIs)?'
  },
  {
    p: { x: -91.490654, y: 78.2895 },
    a: [-91.490654, 78.2895],
    c: 'How much money do you need to get started or scale up? for what purpose?'
  },
  {
    p: { x: 118.278725, y: 12.530243 },
    a: [118.278725, 12.530243],
    c: 'What are your key milestones/traction to date?'
  },
  {
    p: { x: -170.98708, y: 6.2690744 },
    a: [-170.98708, 6.2690744],
    c: 'What is the competition like and how will you differentiate yourself?'
  },
  {
    p: { x: -103.4321, y: 85.1796 },
    a: [-103.4321, 85.1796],
    c: 'What are your plans for using the capital?'
  },
  {
    p: { x: 132.9472, y: -85.02592 },
    a: [132.9472, -85.02592],
    c: 'How will you reach them?'
  },
  {
    p: { x: 71.636215, y: 31.780804 },
    a: [71.636215, 31.780804],
    c: 'What are your key value propositions?'
  },
  {
    p: { x: 134.72058, y: -69.43259 },
    a: [134.72058, -69.43259],
    c: 'What is the problem that you are solving?'
  },
  {
    p: { x: -45.027103, y: -116.52308 },
    a: [-45.027103, -116.52308],
    c: 'Why is now the right time to enter this market?'
  },
  {
    p: { x: -78.18653, y: 52.877174 },
    a: [-78.18653, 52.877174],
    c: 'How do you plan to use the investment funds to grow your business?'
  },
  {
    p: { x: 104.06626, y: 42.281933 },
    a: [104.06626, 42.281933],
    c: 'What are your key strategies for achieving your goals?'
  },
  {
    p: { x: 145.60976, y: -63.752296 },
    a: [145.60976, -63.752296],
    c: 'What is your solution?'
  },
  {
    p: { x: 16.782646, y: -146.20396 },
    a: [16.782646, -146.20396],
    c: 'What are your financial projections?'
  },
  {
    p: { x: -175.1996, y: 17.288923 },
    a: [-175.1996, 17.288923],
    c: 'Who is on your team and what relevant experience do they bring?'
  },
  {
    p: { x: -92.94262, y: 31.830072 },
    a: [-92.94262, 31.830072],
    c: 'What are the potential rewards for investing in your company?'
  },
  {
    p: { x: 63.805767, y: -76.146965 },
    a: [63.805767, -76.146965],
    c: 'What are your key strategies for mitigating these risks and challenges?'
  },
  {
    p: { x: 24.196049, y: -147.11852 },
    a: [24.196049, -147.11852],
    c: 'What are your key financial projections?'
  },
  {
    p: { x: 153.29965, y: -56.499928 },
    a: [153.29965, -56.499928],
    c: 'How does your solution work?'
  },
  {
    p: { x: -69.80166, y: 111.92236 },
    a: [-69.80166, 111.92236],
    c: 'How much money have you raised so far and from which investors?'
  },
  {
    p: { x: 117.148865, y: 23.269657 },
    a: [117.148865, 23.269657],
    c: 'What are the key milestones you plan to achieve in the next 12 months?'
  },
  {
    p: { x: -75.47471, y: 79.17846 },
    a: [-75.47471, 79.17846],
    c: 'How will you use the funding?'
  },
  {
    p: { x: -77.81687, y: 71.01826 },
    a: [-77.81687, 71.01826],
    c: 'How will you use the funds raised?'
  },
  {
    p: { x: -69.8426, y: 130.2267 },
    a: [-69.8426, 130.2267],
    c: 'How much capital do you need to raise?'
  },
  {
    p: { x: -70.02895, y: 120.93709 },
    a: [-70.02895, 120.93709],
    c: 'How much money do you need to raise from investors?'
  }
]

const points = Pointss.map(x => x.p)


//Pythagorean theorem to find the distance between any two points.
const distance = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};


// takes an array of points, and a point, and returns new array of points and distance sorted by distance from the point
const sortByDistance = (points, point) => {
  return points.map(p => {
    return {
      p: p,
      d: distance(p, point)
    };
  }).sort((a, b) => {
    return a.d - b.d;
  });
};



const cal = sortByDistance(points, points[0]);

// the first point is the point itself, so we remove it
cal.shift();


// max distance between two points
const maxDistance = cal[cal.length - 1].d;
console.log(maxDistance);

// min distance between two points
const minDistance = cal[0].d;
console.log(minDistance);

// the distance between the first and last point
const dBetweenFirstAndLast = maxDistance - minDistance;

// the distance between the first and last point divided by the number of points
const dBetweenFirstAndLastDividedByPoints = dBetweenFirstAndLast / points.length;

// find the point that is the furthest away from the first point
const furthestPoint = cal[cal.length - 1].d;


(async function () {

  console.log(furthestPoint)
  // const tasks = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
  //   console.log(data, new Date())
  //   const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json());
  //   console.log(data2, new Date())
  //   const data3 = await fetch('https://jsonplaceholder.typicode.com/todos/3').then(response => response.json());
  //   console.log(data3, new Date())
  //   return { data, data2, data3 }
  // }

  // for (let i = 0; i < 30; i++) {
  //   console.log(i);
  //   tasks();

  // }




  // console.log('end');

  return "done";











}
)();