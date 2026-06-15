import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const persons = [
  {
    title: 'Freelancers',
   
    icon: PersonIcon
  },
  {
    title: 'Startups',
  
    icon: RocketLaunchIcon
  },
  {
    title: 'Small Teams',

    icon: GroupsIcon
  },
  {
    title: 'Students',

    icon: SchoolIcon
  }
];

    export default function Whoisitfor(){
        return(
    <section id="who-is-it-for"  className="flex flex-col items-center  text-center bg-[#F8FAFC] md:py-16 py-14 px-10 ">
        <h1 className="text-xl font-bold text-[#0F172A]  md:text-2xl">Who is <span className="text-[#3B82F6]">TaskFlow</span> for?</h1>
        <p className="mt-3 font-semibold text-gray-600">TaskFlow is designed to help different teams stay organized and productive</p>
        <div className="grid grid-flow-row grid-cols-2 gap-4 mt-6 md:grid-cols-4">
          {persons.map((person,index)=>{
            const Icon=person.icon;
            return(
                <div key={index} className="flex flex-col items-center justify-center w-auto h-auto p-3 text-center bg-[#FFFFFF] border border-spacing-2 border-[#E5E7EB] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
    <Icon className="text-[#22C55E]  text-4xl mb-2"/>
    <h3 className="mt-3 font-semibold text-[#0F172A]">{person.title}</h3>
    
                </div>
            )
          })}
    
        </div>
    
    </section>
    
        )
    }