export const data: Array<any> = [
  'string',
  1010,
  true,
  undefined,
  {
    id: '1st level 01',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '3rd level 01', type: 'Regular' },
        { id: '3rd level 02', type: 'Chocolate' },
        { id: '3rd level 03', type: 'Blueberry' },
        { id: '3rd level 04 ', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '2nd level 01', type: 'None' },
      { id: '2nd level 02', type: 'Glazed' },
      { id: '2nd level 03', type: 'Sugar' },
      { id: '2nd level 04', type: 'Powdered Sugar' },
      { id: '2nd level 05', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '1st level 02',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '1st level 03',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
];
