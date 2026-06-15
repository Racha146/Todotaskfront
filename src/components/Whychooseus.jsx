



import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BoltIcon from '@mui/icons-material/Bolt';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FavoriteIcon from '@mui/icons-material/Favorite';

const whyChooseUs = [
  {
    title: 'Simple & Easy to Use',
    description: 'No learning curve, just focus on your work',
    icon: AutoAwesomeIcon
  },
  {
    title: 'Fast & Efficient',
    description: 'Get things done without wasting time',
    icon: BoltIcon
  },
  {
    title: 'Stay Organized',
    description: 'Clear structure for tasks and projects',
    icon: ChecklistIcon
  },
  {
    title: 'Built for Real Users',
    description: 'Designed for students, teams, and freelancers',
    icon: FavoriteIcon
  }
];

    export default function Whychooseus(){
        return(
    <section id="why-choose-us"  className="flex flex-col items-center  text-center bg-[#F8FAFC] md:py-16 py-14 px-10 ">
   <h1 className="text-xl font-bold text-[#0F172A] md:text-2xl">
  Why choose <span className="text-[#22C55E]">TaskFlow</span>?
</h1>
<p className="mt-3 font-semibold text-gray-600">
  Everything you need to stay productive
</p>

        <div className="grid grid-flow-row grid-cols-1 gap-3 mt-6 md:grid-cols-4">
          {whyChooseUs.map((whyChooseUss,index)=>{
            const Icon=whyChooseUss.icon;
            return(
                <div key={index} className="flex flex-col items-center justify-center w-auto h-auto p-3 text-center bg-[#FFFFFF] border border-spacing-2 border-[#E5E7EB] rounded-xl shadow-md hover:shadow-xl transition-all hover:translate-y-1 duration-200">
    <Icon className="text-[#3B82F6] text-4xl mb-2"/>
    <h3 className="mt-3 font-semibold text-[#0F172A]">{whyChooseUss.title}</h3>
    <p className="mt-2 text-[#475569]">{whyChooseUss.description}</p>
                </div>
            )
          })}
    
        </div>
    
    </section>
    
        )
    }