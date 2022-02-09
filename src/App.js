import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';
import MenuBrackets from './menu';


const rounds = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },

      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{  name: 'Team D' }, {name: 'Team B'}]
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{  name: 'Team D' }, {name: 'Team B'}]
      }
    ],
  },
  {
    title: 'Round two',
    seeds: [
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },

      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{  name: 'Team D' }, {name: 'Team B'}]
      },
      
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{  name: 'Team D' }, {name: 'Team B'}]
      },
      
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{  name: 'Team D' }, {name: 'Team B'}]
      }
    ],
  },

  {
    title: 'SemiFinal',
    seeds: [
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{name: 'Team A'}, {name: 'Team D'}]
      },
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{name: 'Team A'}, {name: 'Team D'}]
      }
    ]
  },

  {
    title: 'Final',
    seeds: [
      {
        id: 8,
        date: new Date().toDateString(),
        teams: [{name: 'Team A'}, {name: 'Team D'}]
      }
    ]
  }
];



// const CustomSeed = () => {
//   return (
//     <>
//         <Seed>
//          <SeedItem>
//            <div>
//              <SeedTeam style={{ color: 'red' }}>{rounds[0].seeds[0].teams[0]?.name || 'NO TEAM '}</SeedTeam>
//           </div>
//          </SeedItem>
//         </Seed>

//         <Seed>
//         <SeedItem>
//            <div>
//              <SeedTeam>{rounds[0].seeds[0].teams[1]?.name || 'NO TEAM '}</SeedTeam>
//           </div>
//          </SeedItem>
//         </Seed>
//       </>
//   );
// }

const App = () => {
  return (
    <>
    <MenuBrackets />
    <Bracket rounds={rounds} />
      </>
  );
}

export default App;
